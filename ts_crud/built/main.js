//表示させる部分のdiv要素
var display = document.getElementById('display');
//生徒データのの初期データ
var studentsData = [
    {
        name: '田中太郎',
        sex: '男性',
        age: 21,
    },
    {
        name: '田中次郎',
        sex: '男性',
        age: 19,
    },
    {
        name: '田中花子',
        sex: '女性',
        age: 14,
    }
];
var selectedDataNum = null; //選択しているデータの番号
var isEditMode = false; //編集モードであるかどうかの真偽値
window.document.addEventListener('DOMContentLoaded', function () {
    refreshDisplay(studentsData);
});
//新規学生データ提出時のハンドラ
function onFormSubmit() {
    var formData = readFormData();
    if (isEditMode) {
        studentsData = updataRecord(formData);
    }
    else {
        studentsData = insertNewRecord(formData);
    }
    refreshDisplay(studentsData);
    resetForm();
}
//フォームの学生データを読み込む関数
function readFormData() {
    var formData = {};
    formData["name"] = document.getElementById("name").value;
    formData["age"] = document.getElementById("age").value;
    formData["sex"] = document.getElementById("sex").value;
    return formData;
}
//渡された学生データを画面に表示する関数
function refreshDisplay(data) {
    display.textContent = null;
    for (var itemIndex = 0; itemIndex < data.length; itemIndex++) {
        display.insertAdjacentHTML('beforeend', "\n       <ul class=\"container\">\n           <li>\u540D\u524D\uFF1A" + data[itemIndex].name + "</li>\n           <li>\u6027\u5225\uFF1A" + data[itemIndex].sex + "</li>\n           <li>\u5E74\u9F62\uFF1A" + data[itemIndex].age + "\u6B73</li>\n           <li>\n            <button class=\"btn btn-green\" onClick=\"onEdit(" + itemIndex + ")\">\u7DE8\u96C6</button>\n            <button class=\"btn btn-orange\" onClick=\"onDelete(" + itemIndex + ")\")>\u524A\u9664</button>\n           </li>\n       </ul>\n       ");
    }
}
//学生データに要素を追加し、新しい学生データを戻す関数
function insertNewRecord(form) {
    studentsData.push({
        name: form.name,
        sex: form.sex,
        age: form.age,
    });
    return studentsData;
}
//選択された番号(selectedDataNum)の学生データを書き換える関数
function updataRecord(form) {
    studentsData[selectedDataNum].name = form.name;
    studentsData[selectedDataNum].sex = form.sex;
    studentsData[selectedDataNum].age = form.age;
    return studentsData;
}
//編集モードに移行する関数
function onEdit(index) {
    selectedDataNum = index;
    document.getElementById("name").value = studentsData[index].name;
    document.getElementById("age").value = String(studentsData[index].age);
    var selectBox = document.getElementById("sex");
    for (var i = 0; i < selectBox.options.length; i++) {
        if (selectBox.options[i].value === studentsData[index].sex) {
            selectBox.options[i].selected = true;
        }
    }
    isEditMode = true;
}
//指定されたindexのデータをstudentsDataから削除するをする関数
function onDelete(index) {
    studentsData.splice(index, 1);
    refreshDisplay(studentsData);
}
//フォームの内容を初期値に戻す関数
function resetForm() {
    document.getElementById("name").value = "";
    document.getElementById("sex").value = "";
    document.getElementById("age").value = "";
    selectedDataNum = null;
    isEditMode = false;
    document.getElementById("sex").options[0].selected = true;
}
