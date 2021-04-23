import React, {useState, useEffect} from "react";
import {GlobalCss} from "./GlobalCss";
import {theme} from "./Styles";
import styled, {ThemeProvider} from "styled-components";
import headerbg from "./images/pattern-bg.png";
import {Ripple} from "react-spinners-css";
import {MapComponent, Button, Search, Card} from "./components";
import axios from "axios";

function App() {
  const [data, setData] = useState({
    ip: "---.----.---",
    isp: `-------`,
    location: {
      region: "---",
      city: "-----",
      postalCode: "-----",
      lat: 42.35843,
      lng: -71.05977,
      timezone: "-----",
    },
  });

  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [ip, setIp] = useState("108.96.63.243");
  const [searchIp, setSearchIp] = useState("108.96.63.243");
  const url =
    "https://geo.ipify.org/api/v1?apiKey=at_yn4MCjmfxBdV6AOMh7WxuYsjjllcz&ipAddress=";

  useEffect(() => {
    axios
      .get(url + searchIp)
      .then((res) => {
        setError(false);
        setData(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(true);
        setSearchIp("");
        alert("Invalid IP Address");
      });

      
  }, [searchIp]);

  const handleInput = (e) => {
    setIp(e.target.value);

  };

  const searchingIp = (e) => {
    setIsLoading(true);
    setError(false);
    setSearchIp(ip);
    console.log("error: ", error);
  };
  return (
    <ThemeProvider theme={theme}>
      <GlobalCss />
      <Container>
        <ContentContainer>
          <Title>IP Address Tracker</Title>

          <SearchBar>
            <Search
              placeholder="Search for any IP address or domain"
              onChange={handleInput}
              onKeyPress={ e => e.key === "Enter" ? searchingIp() : ""}
            />
            <Button onClick={searchingIp} />
          </SearchBar>
          <CardContainer>
            <Card
              ip={isLoading ? "---.---.---.---" : data.ip}
              country={isLoading ? "----" : data.location.city}
              region={isLoading ? "----" : data.location.region}
              postalCode={isLoading ? "----" : data.location.postalCode}
              timezone={isLoading ? "----" : data.location.timezone}
              isp={isLoading ? "----" : data.isp}
            ></Card>
          </CardContainer>
        </ContentContainer>
        <HeaderBg></HeaderBg>
        <MapContainer>
          {isLoading ? (
            <Ripple color="#556bd1" style={{zIndex: 99}} />
          ) : (
            <MapComponent lat={data.location.lat} lng={data.location.lng} />
          )}
        </MapContainer>
      </Container>
    </ThemeProvider>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
`;

const ContentContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  @media ${(props) => props.theme.device.tablet} {
    padding-right: 10%;
    padding-left: 10%;
  }
`;

const CardContainer = styled.div`
  width: 90%;
  z-index: 50;
  box-shadow: 2px 4px 8px rgba(5, 5, 5, 0.15);

  @media ${(props) => props.theme.device.tablet} {
    width: 80%;
    min-width: 750px;
  }
`;

const SearchBar = styled.div`
  display: flex;
  justify-content: center;
  width: 90%;
  box-shadow: 2px 4px 8px rgba(5, 5, 5, 0.15);
  margin-bottom: 20px;

  @media ${(props) => props.theme.device.tablet} {
    width: 50%;
    min-width: 400px;
  }
`;

const Title = styled.h1`
  font-size: ${(props) => props.theme.fontSize.title};
  font-weight: ${(props) => props.theme.fontWeight.bold};
  color: ${(props) => props.theme.colors.white};
  z-index: 99;
  padding: 40px;
`;

const HeaderBg = styled.div`
  width: 100%;
  height: 40%;
  position: absolute;
  background-image: url(${headerbg});
  background-size: 100% 100%;
  background-size: cover;
`;

const MapContainer = styled.div`
  width: 100%;
  height: 60%;
  bottom: 0;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default App;
