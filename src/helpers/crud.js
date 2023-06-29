import axios from "axios";

const formatData = (data) => {
  return data.map((item) => {
    const date = new Date(item.created_at);
    const formattedDate = date.toLocaleDateString();

    return { ...item, created_at: formattedDate };
  });
};

const getUserData = async (endpoint, token) => {
  try {
    const response = await axios.get(endpoint, {
      headers: {
        "x-access-token": token,
      },
    });

    return response.data.result;
  } catch (error) {
    // Manejo de errores
    console.error("Error while getting user:", error);
    throw error;
  }
};

const getPokemons = async (endpoint) => {
  try {
    const response = await axios.get(endpoint);

    return response;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const getPokemonByName = async (endpoint) => {
  try {
    const response = await axios.get(endpoint);

    return response;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const catchPokemon = async (endpoint, token) => {
  try {
    const response = await axios.post(endpoint, {
      headers: {
        "x-access-token": token,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const releasePokemon = async (endpoint, token) => {
  try {
    const response = await axios.put(endpoint, {
      headers: {
        "x-access-token": token,
      },
    });
    console.log(response);
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const createTeam = async (endpoint, token) => {
  try {
    const response = await axios.delete(endpoint, {
      headers: {
        "x-access-token": token,
      },
    });
    console.log(response);
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const removeTeam = async (endpoint, token) => {
  try {
    const response = await axios.delete(endpoint, {
      headers: {
        "x-access-token": token,
      },
    });
    console.log(response);
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export { formatData, getUserData, getPokemons, getPokemonByName, catchPokemon, releasePokemon, createTeam, removeTeam };
