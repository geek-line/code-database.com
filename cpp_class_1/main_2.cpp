#include <string>
#include <iostream>

class Hogemon{
public:
    int index;
    std::string name;
    int level;
    Hogemon(int i, std::string n, int l){
        index = i;
        name = n;
        level = l;
    }
};

int main(){
    Hogemon fugachu(1, "fugachu", 1);
    
    std::cout << fugachu.index << " : " << fugachu.name << std::endl;
    std::cout << "今のレベルは" << fugachu.level << "です。" << std::endl;
}