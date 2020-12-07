import filterByTerm from '../Components/FilterByTerm';

describe(`filter by term tests`, () => {
    test(`it should filter by a search term (link)`, () => {
        const input = [
            {id:1, url:"https://url1.dev"},
            {id:2, url:"https://url2.dev"},
            {id:3, url:"https://url3.dev"},
            {id:4, url:"https://link3.dev"}
        ];

        const output = [{ id: 4, url: "https://link3.dev" }];

        expect(filterByTerm(input, "link")).toEqual(output);
        expect(filterByTerm(input, "LINK")).toEqual(output);
    });

    test(`it should filter by a search term (url)`, () => {
        const input = [
            { id: 1, url: "https://url1.dev" },
            { id: 2, url: "https://url2.dev" },
            { id: 3, url: "https://url3.dev" },
            { id: 4, url: "https://link3.dev" }
        ];

        const output = [{ id: 1, url: "https://url1.dev" },
            { id: 2, url: "https://url2.dev" },
            { id: 3, url: "https://url3.dev" }];

        expect(filterByTerm(input, "uRl")).toEqual(output);
    });

    test(`Checks if error is thrown when search is empty`, () => {
        const input = [
            { id: 1, url: "https://url1.dev" },
            { id: 2, url: "https://url2.dev" },
            { id: 3, url: "https://url3.dev" },
            { id: 4, url: "https://link3.dev" }
        ];
        expect(()=> {filterByTerm(input, "")}).toThrowError(Error("searchTerm cannot be empty"));
    })

    //syntax
    test("string", () => {
        //code
    }); 
})