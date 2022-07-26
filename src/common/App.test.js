import { render, screen } from "@testing-library/react";

/*test("testing useQuery", async () => {
  jest.mock("react-query", () => ({
    useQuery: () => (
      { isLoading: false, error: {}, data: [] },
      {
        refetch: jest.fn()
      }
    )
  }));
});
*/
test("testing api results", async () => {
  var apiResult = await fetch("https://randomuser.me/api/?results=10").then(
    (response) => {
      return response.json();
    }
  );
  expect(apiResult).toBeDefined();
  expect(apiResult.results).toBeDefined();
  expect(apiResult.results.length).toBe(10);
});

test("sorting api data", async () => {
  var sortApi = await fetch("https://randomuser.me/api/?results=4").then(
    (response) => {
      return response.json();
    }
  );

  var tempRes = sortApi.results.map((user, i) => {
    return { ...user, completed: true };
  });

  sortApi.results.sort((a, b) => {
    return a.completed ? -1 : 1;
  });

  expect(sortApi).toBeDefined();
  expect(sortApi.results).toBeDefined();
  expect(tempRes[0].completed).toBeTruthy();
});

test("testing button label", async () => {
  const refetch = jest.fn();
  render(
    <div className="btnDiv">
      <button
        id="load-more-button"
        className="btnLoad"
        onClick={() => {
          refetch();
        }}
      >
        Load More
      </button>
    </div>
  );
  var btn = document.getElementById("load-more-button");
  expect(btn).toBeTruthy();
});

test("testing load more button results", async () => {
  const refetch = jest.fn();
  render(
    <div className="btnDiv">
      <button
        id="load-more-button"
        className="btnLoad"
        onClick={() => {
          refetch();
        }}
      >
        Load More
      </button>
    </div>
  );
  var ele = document.getElementById("load-more-button");
  expect(ele).toBeTruthy();
  ele.click();
  expect(refetch).toBeCalledTimes(1);
});
