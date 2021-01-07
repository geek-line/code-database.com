#include <fstream>
#include <iostream>
#include <string>

int main(int argc, char *argv[]){
    std::ifstream reading_file;
    std::string filename = "sample.txt";
    reading_file.open(filename, std::ios::in);
    std::string reading_line_buffer;
    while(std::getline(reading_file, reading_line_buffer)){
        std::cout << reading_line_buffer << std::endl;
    }
    return 0;
}