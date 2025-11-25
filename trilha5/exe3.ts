
abstract class FavoriteManager {
  protected favorites: string[] = [];

  abstract addFavorite(item: string): void;
  abstract getFavorites(): string[];
}


class MoviesFavoriteManager extends FavoriteManager {
  addFavorite(item: string): void {
    
    if (this.favorites.includes(item)) {
      console.log(`⚠️ O filme "${item}" já está na lista de favoritos.`);
      return;
    }

    this.favorites.push(item);

    
    this.favorites.sort((a, b) => a.localeCompare(b));
  }

  getFavorites(): string[] {
    return this.favorites;
  }
}


class BooksFavoriteManager extends FavoriteManager {
  addFavorite(item: string): void {
    
    this.favorites.unshift(item);
  }

  getFavorites(): string[] {
    return this.favorites;
  }
}


