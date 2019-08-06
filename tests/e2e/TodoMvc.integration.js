const puppeteer = require("puppeteer");

describe("TodoMVC", () => {
  let browser;
  let page;
  const NewItemQuery = ".new-todo";
  const TodoListNewItemQuery = ".todo-list .view label";
  const TodoListDoItemQuery = ".todo-list .view .toggle";
  const TodoListClearItemQuery = ".clear-completed";
  const TodoListNewItemClickableQuery = ".todo-list .view";
  const TodoListNewItemLiQuery = ".todo-list li";
  const TodoListQuery = ".todo-list";
  const TodoListCountQuery = ".footer .todo-count strong";

  beforeAll(async () => {
    browser = await puppeteer.launch({ headless: false, timeout: 3000 });
    page = await browser.newPage();

    await page.goto("http://localhost:8080");
  });

  afterAll(async () => {
    await page.close();
    await browser.close();
  });

  it('title should be "TodoMvc"', async () => {
    const title = await page.title();
    expect(title).toMatch("TodoMvc");
  });
  it("the content of new todo can be input success", async () => {
    await page.type(NewItemQuery, "hello-world", {
      delay: 100
    });
    const newItemValue = await page.$eval(NewItemQuery, el => el.value);
    expect(newItemValue).toBe("hello-world");
  });
  it("the enter key should be useful to the new todo input", async () => {
    await page.keyboard.down("Enter");
    const newItemValue = await page.$eval(NewItemQuery, el => el.value);
    await page.waitFor(1000);
    expect(newItemValue).toBe("");
  });
  it("the new todo should be occured in todo list", async () => {
    const newItemValue = await page.$eval(
      TodoListNewItemQuery,
      el => el.innerText
    );
    expect(newItemValue).toBe("hello-world");
  });
  it("edit class should be occured when double click the todo list", async () => {
    await page.click(TodoListNewItemClickableQuery, {
      clickCount: 2,
      delay: 100
    });
    const liClass = await page.$eval(
      TodoListNewItemLiQuery,
      el => el.className
    );
    expect(liClass).toBe("editing ");
  });
  it("edit todo list success", async () => {
    page.keyboard.down("2");
    await page.waitFor(1000);
    await page.keyboard.down("Enter");
    await page.waitFor(300);
    const newItemValue = await page.$eval(
      TodoListNewItemQuery,
      el => el.innerText
    );
    expect(newItemValue).toBe("hello-world2");
  });
  it("toggle todo list success", async () => {
    await page.click(TodoListDoItemQuery);
    await page.waitFor(1000);
    const liClass = await page.$eval(
      TodoListNewItemLiQuery,
      el => el.className
    );
    const count = await page.$eval(TodoListCountQuery, el => el.innerText);
    expect(liClass).toBe(" completed");
    expect(count).toBe("0");
  });
  it("clear todo list success", async () => {
    await page.click(TodoListClearItemQuery);
    await page.waitFor(1000);
    const ListHtml = await page.$eval(TodoListQuery, el => el.innerHtml);
    expect(ListHtml).toBe(undefined);
  });
});
