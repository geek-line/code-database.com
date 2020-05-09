package main

import (
	"log"
	"strconv"
)

func main() {
	str := "hoge"
	if num, err := strconv.Atoi(str); err != nil {
		log.Print(err.Error())
	} else {
		log.Print(num)
	}
	str = "4"
	if num, err := strconv.Atoi(str); err != nil {
		log.Print(err.Error())
	} else {
		log.Print(num)
	}
}
