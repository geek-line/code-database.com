package main

import (
	"fmt"
	"io/ioutil"
)

func main() {
	bytes, err := ioutil.ReadFile("sample.txt")
	if err != nil {
		panic(err.Error())
	}
	fmt.Println(string(bytes))
}
