const _apiBase = `https://api.pokemontcg.io/v1/cards`;
const _apiTypes = `https://api.pokemontcg.io/v1/types`;
const _apiSubTypes = `https://api.pokemontcg.io/v1/subtypes`;

class PokeApi {
  async getResource(url) {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(`cant fetch api return ${res.status}`);
    }
    return await res.json();
  }

  async getAllCards() {
    return await this.getResource(`https://api.pokemontcg.io/v1/cards/`);
  }

  async getCard(id) {
    return await this.getResource(`https://api.pokemontcg.io/v1/cards/${id}/`);
  }

  getTypesList() {
    return this.getResource(`https://api.pokemontcg.io/v1/types/`);
  }

  getSubtypesList() {
    return this.getResource(`https://api.pokemontcg.io/v1/subtypes/`);
  }

  getTypeOf(id) {
    return this.getResource(`https://pokemontcg.io/cards?type=${id}/`);
  }

  getSubtypeOf(id) {
    return this.getResource(`https://pokemontcg.io/cards?subtype=${id}/`);
  }
}

// let a = new PokeApi()

// a.getCard('xy7-10').then(d => console.log(d))

export default PokeApi;
