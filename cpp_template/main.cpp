#include <iostream>

template <class Type>
Type add(Type a, Type b){
  Type result = a + b;
  return result;
}

template <> std::string add(std::string a, std::string b){
    std::string result = a + " " + b;
    return result;
}

int main(){
  int x_i = 45;
  int y_i = 55;
  double x_d = 4.5677;
  double y_d = 78.4456;
  std::string x_str = "ほげ";
  std::string y_str = "ふが";
  std::cout << add(x_i, y_i) << std::endl;
  std::cout << add(x_d, y_d) << std::endl;
  std::cout << add<double>(x_i, y_d) << std::endl;
  std::cout << add(x_str, y_str) << std::endl;
}