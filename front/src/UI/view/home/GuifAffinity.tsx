import "./GuifAffinity.css";
import { Layout } from "../../layout/Layout";
import { Header } from "../../components/Header/Header";
import { SearchBar } from "../../components/SearchBar/SearchBar";
import { GifList } from "../../components/GifList/GifList";
import { useState } from "react";

export const GuifAffinity = () => {
  const [search, setSearch] = useState("");

  return (
    <div className="App">
      <Layout>
        <Header />
        <SearchBar search={search} setSearch={setSearch} />
        <GifList search={search} />
      </Layout>
    </div>
  );
};
