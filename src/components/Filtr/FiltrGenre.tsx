import FiltrBlockItem from "./FiltrBlockItem"

const genres = [
    "mmorpg", "shooter", "strategy",
    "moba", "racing", "sports", 
    "social", "sandbox", "open-world", "survival", "pvp", "pve",
    "pixel", "voxel", "zombie", "turn-based", "first-person", 
    "third-Person", "top-down", "tank", "space", "sailing", 
    "side-scroller", "superhero", "permadeath", "card", 
    "battle-royale", "mmo", "mmofps", "mmotps", "3d", "2d",
    "anime", "fantasy", "sci-fi", "fighting", "action-rpg",
    "action", "military", "martial-arts", "flight", "low-spec",
    "tower-defense", "horror", "mmorts"
];


function FiltrGenre() {
    return (
      <div className="genre__block-list block-list">
        {genres.map((genre, index) => (
          <FiltrBlockItem
            key={index}
            className="genre"
            inputId={genre.toLowerCase()}
            itemText={genre}
          />
        ))}
      </div>
    );
  }

  export default FiltrGenre;