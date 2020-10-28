

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

  async getTypesList() {
    return await this.getResource(`https://api.pokemontcg.io/v1/types/`);
  }

  async getSubtypesList() {
    return await this.getResource(`https://api.pokemontcg.io/v1/subtypes/`);
  }

  async getTypeOf(id) {
    return await this.getResource(`https://api.pokemontcg.io/v1/cards?types=${id}`);
  }

  async getSubtypeOf(id) {
    return await this.getResource(`https://api.pokemontcg.io/v1/cards?subtype=${id}`);
  }
}

// let a = new PokeApi()

// a.getCard('xy7-10').then(d => console.log(d))

export default PokeApi;
