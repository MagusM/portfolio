const fetcher = async (url) => {
  const res = await fetch(url);
  if (!res.ok) {
    const errorMessage = await res.json();
    console.log('fetcher', errorMessage.message);
    const error = new Error;
    error.message = errorMessage.message;
    throw error;
  }
  console.log('fetcher res', { res });

  return res.json();
}

export default fetcher;
