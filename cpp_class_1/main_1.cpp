#include <string>
#include <iostream>

class Hogemon{
public:
    int index;
    std::string name;
    int level;
};

int main(){
    Hogemon fugachu;
    fugachu.index = 1;
    fugachu.name = "fugachu";
    fugachu.level = 1;
    
    std::cout << fugachu.index << " : " << fugachu.name << std::endl;
    std::cout << "今のレベルは" << fugachu.level << "です。" << std::endl;
}