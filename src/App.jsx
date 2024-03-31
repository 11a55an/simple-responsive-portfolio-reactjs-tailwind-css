const getDataFromApi = async () => {
  let myEndpoint = "https://newsapi.org/v2/top-headlines?country=us&apiKey=dd4cf4a5a1e64635a4d62c631362bdf4";
  let myData = await fetch(myEndpoint); /* Must wait for fetching */
  //console.log("received Data: ", myData);
  let parsedData = await myData.json(); /* Must wait for myData.json */
  console.log("parsed received Data: ", parsedData);
};
 
function App() {
  getDataFromApi();
  return (
    <div>
      <h1>Data from our REST API</h1>
    </div>
  );
}
 
export default App;