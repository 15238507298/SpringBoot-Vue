<template>
  <el-carousel >
    <el-carousel-item v-for="item in indexImages" :key="item" align="center" >
      <el-image :src="item" fit="fill" style="width: 900px;height: 600px;"></el-image>
    </el-carousel-item>
  </el-carousel>

</template>

<script>
  import image1 from '../assets/indexImages/1.jpg'
  import image2 from '../assets/indexImages/2.jpg'
  import image3 from '../assets/indexImages/3.jpg'
  import image4 from '../assets/indexImages/4.jpg'
  import image5 from '../assets/indexImages/5.jpg'
  import image6 from '../assets/indexImages/6.jpg'
  import image7 from '../assets/indexImages/7.jpg'
    export default {
        name: "Index",
      data(){
          return {
            indexImages:[image2,image3,image4,image5,image6,image7],
            imgs:[
              'https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg',
              'https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg',
              'https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg',
              'https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg',
              'https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg',
              'https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg'
            ]
          }
      }
    }
</script>

<style scoped>

</style>
