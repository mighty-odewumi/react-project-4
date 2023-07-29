import PageHeader from "./components/PageHeader";
import data from "./components/data";
import InfoContainer from "./components/InfoContainer";


export default function App() {
  const infoElements = data.map((val, index) => {
    return <InfoContainer 
              key={index}
              {...val}
    />
  });
  

  return (
    <div className="app-container">
      <PageHeader />

      <div className="main-content">
        {infoElements}
      </div>
    </div>
  )

}
