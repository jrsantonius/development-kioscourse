import {
  Link as ChakraLink,
  Text,
  Code,
  Icon,
  List,
  ListIcon,
  ListItem,Box
} from "@chakra-ui/core";
import React, { Component } from 'react';
import { CourseCard } from "../../components/CourseCard";
import { Container } from "../../components/Container";
import { Hero } from "../../components/Hero";
import { Subhero } from "../../components/Subhero";


import { HomeCard } from "../../components/HomeCard";
import { Main } from "../../components/Main";
import { DarkModeSwitch } from "../../components/DarkModeSwitch";
import { CTA } from "../../components/CTA";
import { Footer } from "../../components/Footer";

import Loader from 'react-loader-spinner';
import Head from 'next/head'
import { Header } from "../../components/Header_2";






var base;
class App extends React.Component<{}, any>{

  constructor(props) {
    super(props);

    this.state = {
      results: [],
      isLoading: true,

    };


  }

  componentDidMount() {
    fetch("/api/personal-development-api")
      .then(response => response.json())
      .then(base => this.setState({ results: base.dataTotal, isLoading: false }));

    //console.log(data.pages);

  };


  render() {
    const { results } = this.state;

    return (
      <Box width="100%">
        <Header />
        <Container>

          <Hero title="Lifestyle & Personal Development" />
          <Main>
            <Container
              flexDirection="row"
              flexWrap="wrap"
              bottom="0"
              width="100%"
              flex="1"
              justifyContent="center"
              py={2}
            >
              {this.state.isLoading ?
                <div
                  style={{
                    width: "100%",
                    height: "100",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                  }}
                >
                  <Loader type="ThreeDots" color="#28B6E8" height="100" width="100" />
                </div> :
                results.map(hit =>
                  <CourseCard
                    img={hit.ImageUrl}
                    title={hit.Title}
                    price={hit.PriceOld}
                    review={hit.Reviews}
                    star={hit.Rating}
                    time={hit.EndTime}
                    linkUdemy={hit.Link}
                    students={hit.Students}

                  />
                )}

            </Container>

          </Main>


          <Footer>
            <Text> © 2020 CourseDigital.store | Powered by-
      <ChakraLink
                isExternal
                href="/"
                color="#28B6E8"
              >neodroid</ChakraLink></Text>

          </Footer>

        </Container>

      </Box>

    );
  }



}


export default App;
