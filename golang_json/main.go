package main

import (
	"encoding/json"
	"io/ioutil"
	"net/http"
)

//Person sample.jsonのデコード用の構造体
type Person struct {
	ID   int    `json:"id"`
	Name string `json:"name"`
	Sex  string `json:"sex"`
}

func personsHandler(w http.ResponseWriter, r *http.Request) {
	bytes, err := ioutil.ReadFile("sample.json")
	if err != nil {
		panic(err.Error())
	}
	var persons []Person
	if err := json.Unmarshal(bytes, &persons); err != nil {
		panic(err.Error())
	}
	for i, v := range persons {
		if v.Name == "Micheal" || v.Name == "Jon" {
			persons[i].Sex = "male"
		} else {
			persons[i].Sex = "female"
		}
	}
	json, err := json.Marshal(persons)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}
	w.Header().Set("Content-Type", "application/json")
	w.Write(json)
}

func main() {
	http.HandleFunc("/api/persons/", personsHandler)
	http.ListenAndServe(":8000", nil)
}
