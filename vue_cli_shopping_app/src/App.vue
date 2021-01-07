<template>
  <items-index v-bind:products="products"></items-index>
</template>

<script>
import ItemsIndex from './components/ItemsIndex.vue'

export default {
  data:function(){
  return{
    products:[
      {
        id: 1,
        name: "じゃがいも（きたあかり）",
        price: 30,
        description: "栗じゃがいもと呼ばれるくらいとても甘いジャガイモです。煮崩れしやすいいもですがコロッケ、ポテトサラダ等に向いています。",
        imgSrc: "https://3.bp.blogspot.com/-EiqKoF2kMTQ/UkJM5vVnb7I/AAAAAAAAYVU/tCuJxeQQiNE/s800/jagaimo_poteto.png"
      },
      {
        id: 2,
        name: "にんじん",
        price: 20,
        description: "根色・肉色ともに濃鮮紅色で、肌は極めて滑らか。βカロチンが多く含まれている人参で健康を促進！色々な用途に使える万能食材です",
        imgSrc: "https://3.bp.blogspot.com/-QCe-ngfpbTg/UkJM8tkaq6I/AAAAAAAAYWM/U3pbo3YS9XA/s800/ninjin_carrot.png"
      },
      {
        id: 3,
        name: "たまねぎ",
        price: 20,
        description: "「札幌黄」は他の玉葱よりも肉厚で柔らかく、熱を加えると甘味と柔らかさが増すのが特徴です。",
        imgSrc: "https://3.bp.blogspot.com/-SDkR2b5YQec/UkJNENH-daI/AAAAAAAAYYE/fZCzG5KG9I4/s800/tamanegi_onion+(1).png"
      },
      {
        id: 4,
        name: "かぼちゃ",
        price: 40,
        description: "かぼちゃには、粘膜や皮膚の抵抗力を強くするカロテンが多く含まれています。てんぷらや、中身をくり抜いて容器に使った南瓜グラタンなど、料理のバリエーションが増えます。",
        imgSrc: "https://1.bp.blogspot.com/-Pvw0cjpU8PU/XUTi7aOOAGI/AAAAAAABT-E/_nodpClWjNUmUJf0pQnI7K2pqtyW1SORQCLcBGAs/s1600/kabocha.png"
      },
      {
        id: 5,
        name: "たまご",
        price: 10,
        description: "那須野が原で毎日、産まれています。箸でつまめる程のしっかりとした弾力、コクと甘みを併せ持った、濃い味わいが評判のこだわり卵です。",
        imgSrc: "https://3.bp.blogspot.com/-nqViReTJpqk/U0pTY72cRnI/AAAAAAAAfJ4/kg1r7C_y48k/s800/tamago_pack.png"
      },
      {
        id: 6,
        name: "ブロッコリー",
        price: 50,
        description: "ゆでてマヨネーズ、煮物や温野菜で食べると美味しいです。茎も皮をむいて炒めると美味しく食べられます。",
        imgSrc: "https://3.bp.blogspot.com/-kUCoL5ijgWA/UkJMpwWHd0I/AAAAAAAAYQ4/qxVI_KDl1po/s800/broccoli.png"
      }
    ]
  }
},
  name: 'app',
  components: {
    ItemsIndex
  }
}
</script>

