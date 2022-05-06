import React from "react"
import {Header} from "../../components/header/Header"
import {Footer} from "../../components/footer/Footer"

export const Front = () => {
    const [data, setData] = React.useState(null);
  
    React.useEffect(() => {
      fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
    }, []);
  
    return (
        <div>
        <Header />
        <section className="App-header">
          <p>{!data ? "Data fra server ikke loadet..." : data}</p>
          </section>
        <Footer />
        </div>
    );
  }