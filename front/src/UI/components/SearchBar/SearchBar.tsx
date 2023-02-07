import "./SearchBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

interface Props {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}

const getPlaceholder = () => {
  if (window.matchMedia("(max-width: 768px)").matches) {
    return "¿Que quieres buscar?";
  }
  return "¿Que quieres buscar? ¡Encuentralo!";
};

export const SearchBar = ({ search, setSearch }: Props) => {
  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="searchBar">
      <input
        value={search}
        className="searchInput font-h4"
        type="text"
        placeholder={getPlaceholder()}
        aria-label="Search Bar"
        onChange={handleChange}
      />
      <button aria-label="Search button" className="searchButton">
        <FontAwesomeIcon className="searchIcon" icon={faMagnifyingGlass} />
      </button>
    </div>
  );
};
