class Api {
  constructor() {
    this.baseUrl = "https://api.imgflip.com/get_memes";
  }

  async fetchMems() {
    try {
      const response = await fetch(`${this.baseUrl}`);
      const data = await response.json();
      return data.data.memes;
    } catch (error) {
      console.error("Error fetching memes:", error);
      throw error;
    }
  }
}
