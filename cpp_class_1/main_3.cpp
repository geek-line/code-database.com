#include <string>
#include <iostream>

class Hogemon{
private:
    int index;
    std::string name;
    int level;
public:
    Hogemon(int i, std::string n, int l){
        index = i;
        name = n;
        level = l;
    }
    int getIndex(){
        return index;
    }
    std::string getName(){
        return name;
    }
    int getLevel(){
        return level;
    }
    void levelUp(){
        level += 1;
    }
};

int main(){
    Hogemon fugachu(1, "fugachu", 1);
    fugachu.levelUp();
    std::cout << fugachu.getIndex() << " : " << fugachu.getName() << std::endl;
    std::cout << "今のレベルは" << fugachu.getLevel() << "です。" << std::endl;
}