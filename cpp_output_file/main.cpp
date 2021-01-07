#include <fstream>
#include <string>

int main(int argc, char *argv[]){
    std::ofstream writing_file;
    std::string filename = "sample.txt";
    writing_file.open(filename, std::ios::out);
    // writing_file.open(filename, std::ios::app); //ファイルの末尾に文字列を追加する
    std::string writing_text = "C++（シープラスプラス）は、汎用プログラミング言語のひとつである。\n日本語話者の間では「シープラ」又は「シープラプラ」と通称される。";
    writing_file << writing_text << std::endl;
    writing_file.close();
    return 0;
}