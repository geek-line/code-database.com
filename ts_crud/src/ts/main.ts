//表示させる部分のdiv要素
const display = document.getElementById('display');
//生徒データのの初期データ
let studentsData = [
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
]
let selectedDataNum = null;//選択しているデータの番号
let isEditMode = false;//編集モードであるかどうかの真偽値

window.document.addEventListener('DOMContentLoaded', () => {
    refreshDisplay(studentsData);
})

//新規学生データ提出時のハンドラ
function onFormSubmit() {
    let formData = readFormData();
    if (isEditMode) {
        studentsData = updataRecord(formData);
    } else {
        studentsData = insertNewRecord(formData);
    }
    refreshDisplay(studentsData);
    resetForm();
}

//フォームの学生データを読み込む関数
function readFormData() {
    var formData = {};
    formData["name"] = (<HTMLInputElement>document.getElementById("name")).value;
    formData["age"] = (<HTMLInputElement>document.getElementById("age")).value;
    formData["sex"] = (<HTMLInputElement>document.getElementById("sex")).value;
    return formData;
}

//渡された学生データを画面に表示する関数
function refreshDisplay(data) {
    display.textContent = null;
    for (let itemIndex = 0; itemIndex < data.length; itemIndex++) {
        display.insertAdjacentHTML('beforeend',
            `
       <ul class="container">
           <li>名前：${data[itemIndex].name}</li>
           <li>性別：${data[itemIndex].sex}</li>
           <li>年齢：${data[itemIndex].age}歳</li>
           <li>
            <button class="btn btn-green" onClick="onEdit(${itemIndex})">編集</button>
            <button class="btn btn-orange" onClick="onDelete(${itemIndex})")>削除</button>
           </li>
       </ul>
       `)
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
    (<HTMLInputElement>document.getElementById("name")).value = studentsData[index].name;
    (<HTMLInputElement>document.getElementById("age")).value = String(studentsData[index].age);
    const selectBox = document.getElementById("sex");
    for (let i = 0; i < (<HTMLSelectElement>selectBox).options.length; i++) {
        if ((<HTMLSelectElement>selectBox).options[i].value === studentsData[index].sex) {
            (<HTMLSelectElement>selectBox).options[i].selected = true;
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
    (<HTMLInputElement>document.getElementById("name")).value = "";
    (<HTMLInputElement>document.getElementById("sex")).value = "";
    (<HTMLInputElement>document.getElementById("age")).value = "";
    selectedDataNum = null;
    isEditMode = false;
    (<HTMLSelectElement>document.getElementById("sex")).options[0].selected = true;
}