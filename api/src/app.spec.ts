import request from "supertest";
import low from "lowdb";
import { createApp } from "./app";
import { DataBaseSchema } from "./db/memes";
import { Express } from "express";
import FileSync from "lowdb/adapters/FileSync";

describe("GET /memes", () => {
  let app: Express;
  beforeEach(() => {
    const db = low(new FileSync<DataBaseSchema>("./data/db.json"));
    app = createApp(db);
  });

  it("Devuelve código 200 y formato json", (done) => {
    request(app)
      .get("/memes")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200)
      .end(done);
  });

  it("Devuelve una lista de memes", (done) => {
    request(app)
      .get("/memes")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200)
      .expect((response) => expect(response.body).toBeInstanceOf(Array))
      .end(done);
  });

  it("Devuelve un listado de 50 memes", (done) => {
    request(app)
      .get("/memes")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200)
      .expect((response) => expect(response.body).toHaveLength(50))
      .end(done);
  });

  it("Devuelve un listado de 10 memes", (done) => {
    request(app)
      .get("/memes?limit=10")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200)
      .expect((response) => expect(response.body).toHaveLength(10))
      .end(done);
  });
});

describe("GET /memes/id/:memeID", () => {
  let app: Express;
  beforeEach(() => {
    const db = low(new FileSync<DataBaseSchema>("./data/db.json"));
    app = createApp(db);
  });

  it("Se devuelve el meme pedido por id", (done) => {
    request(app)
      .get("/memes/id/YleuWir5NTNVXkflSp")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200)
      .expect((response) =>
        expect(response.body).toEqual({
          id: "YleuWir5NTNVXkflSp",
          title: "Movie Brazil GIF by MOODMAN",
          url: "https://media4.giphy.com/media/YleuWir5NTNVXkflSp/giphy.gif?cid=be655fb7f245f7d29df0fc743b70e3ee884dbaf31956e789&rid=giphy.gif",
          tags: ["#movie", "#brazil", "#brazil the movie"],
          relatedMemes: [
            {
              url: "https://media3.giphy.com/media/J6OQEgOUNOU5BWfjFj/giphy.gif?cid=be655fb7f245f7d29df0fc743b70e3ee884dbaf31956e789&rid=giphy.gif",
              id: "J6OQEgOUNOU5BWfjFj",
            },
            {
              url: "https://media1.giphy.com/media/l5DePfMmB09ZVkh3Af/giphy.gif?cid=be655fb7f245f7d29df0fc743b70e3ee884dbaf31956e789&rid=giphy.gif",
              id: "l5DePfMmB09ZVkh3Af",
            },
            {
              url: "https://media2.giphy.com/media/f4OBJD88w2M7MUVSqf/giphy.gif?cid=be655fb7f245f7d29df0fc743b70e3ee884dbaf31956e789&rid=giphy.gif",
              id: "f4OBJD88w2M7MUVSqf",
            },
            {
              url: "https://media2.giphy.com/media/L0SaMZxxqMgsAJf69v/giphy.gif?cid=be655fb7f245f7d29df0fc743b70e3ee884dbaf31956e789&rid=giphy.gif",
              id: "L0SaMZxxqMgsAJf69v",
            },
            {
              url: "https://media2.giphy.com/media/JTzI2kM0ymlizRwyV2/giphy.gif?cid=be655fb7f245f7d29df0fc743b70e3ee884dbaf31956e789&rid=giphy.gif",
              id: "JTzI2kM0ymlizRwyV2",
            },
          ],
        })
      )
      .end(done);
  });

  it("Se devuelve 404 cuando el id no existe", (done) => {
    request(app)
      .get("/memes/id/YleuWir5NTNVXkflSpsadasidas1294u1292341")
      .set("Accept", "application/json")
      .expect("Content-Type", /text\/plain/)
      .expect(404)
      .end(done);
  });
});

describe("404: NOT FOUND", () => {
  let app: Express;
  beforeEach(() => {
    const db = low(new FileSync<DataBaseSchema>("./data/db.json"));
    app = createApp(db);
  });

  it("Cuando un url no existe se devuelve 404", (done) => {
    request(app)
      .get("/ABCDEF")
      .expect("Content-Type", /text\/plain/)
      .expect(404)
      .end(done);
  });
});
