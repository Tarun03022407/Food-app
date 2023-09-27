import React, { useState } from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import SearchBar from "../Components/SearchBar";
import UseResults from "../Hooks/UseResults";
import ResultList from "../Components/ResultsList";
const SearchScreen = () => {
 
  const [term, setTerm] = useState("");
  const [results, searchApi, errorMessage] = UseResults();

  const filterResultsByPrice = (price) => {
    // price='$'||'$$'||'$$$'
    return results.filter((result) => {
      return result.price === price;
    });
  };
  return (
    <>
      <SearchBar
        term={term}
        onChangeTerm={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      {/* <Text>we have found {results.length} results</Text> */}
      <ScrollView>
        <ResultList
          results={filterResultsByPrice("$")}
          title="Cost Effective"
        />
        <ResultList
          results={filterResultsByPrice("$$")}
          title="Bit Pricier"
        />
        <ResultList
          results={filterResultsByPrice("$$$")}
          title="Big Spender"
        />
      </ScrollView>
    </>
  );
};
export default SearchScreen;
