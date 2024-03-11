import axios from "axios";

export async function getPost(
  search = "matrix",
  page = 1,
  type = null,
  from = null
) {
  try {
    const { data, status } = await axios.get(
      `https://www.omdbapi.com/?apikey=2d42d656&s=${search}${
        page ? `&page=${page}` : ""
      }${type ? `&type=${type}` : ""}${from ? `&y=${from}` : ""}`,
      {
        headers: {
          Accept: "application/json",
        },
      }
    );
    console.log("response status is: ", status);
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log("error message: ", error.message);
      return error.message;
    } else {
      console.log("unexpected error: ", error);
      return "An unexpected error occurred";
    }
  }
}

export async function getSinglPost(id) {
  try {
    const { data, status } = await axios.get(
      `https://www.omdbapi.com/?apikey=2d42d656&i=${id}`,
      {
        headers: {
          Accept: "application/json",
        },
      }
    );
    console.log("response status is: ", status);
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log("error message: ", error.message);
      return error.message;
    } else {
      console.log("unexpected error: ", error);
      return "An unexpected error occurred";
    }
  }
}
