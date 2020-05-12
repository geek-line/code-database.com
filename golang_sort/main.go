package main

import (
	"log"
	"sort"
)

//Person 今回使用する人のデータの各要素
type Person struct {
	Name string
	Age  int
}

// ByAge Personの配列をAgeフィールドの値でソートするためのsort.Interface
type ByAge []Person

func (arr ByAge) Len() int {
	return len(arr)
}
func (arr ByAge) Swap(i, j int) {
	arr[i], arr[j] = arr[j], arr[i]
}
func (arr ByAge) Less(i, j int) bool {
	return arr[i].Age < arr[j].Age
}

func main() {
	people := ByAge{
		{"Micael", 25},
		{"Nancy", 25},
		{"Jon", 27},
		{"Rachel", 21},
	}
	log.Print(people)
	sort.Sort(people)
	log.Print(people)
}
