<template>
  <div class="h-screen w-screen bg-black grid items-end justify-end relative"> 
    <!-- Canvas -->
    <canvas class="fixed inset-0"></canvas>
    <!-- Background -->
    <div class="absolute opacity-[0.075] inset-0 pointer-events-none">
      <div class="bg-gradient-to-r from-rose-500 to-violet-500 blur-3xl w-full h-full"></div>
    </div>
    <!-- Button -->
    <div class="relative group m-8">
      <div class="rounded-md relative z-10 cursor-pointer text-sm px-2 items-center py-1.5 bg-black flex group-hover:bg-gray-900 text-gray-200">
        <svg width="100" height="100" viewBox="0 0 100 100" class="w-6 h-6" fill="none" xmlns="http://www.w3.org/2000/svg">
          <!-- <path d="M100 0H0V100H100V0Z" fill="#0C0D0F"/> -->
          <path fill-rule="evenodd" clip-rule="evenodd" d="M40.2603 66.2347H59.7363C59.7363 66.2347 59.7363 65.0992 59.7363 64.1033C59.7363 63.2917 59.0782 62.6334 58.2664 62.6334C58.2661 62.6334 58.2658 62.6334 58.2654 62.6334C58.0712 62.6334 57.8852 62.5562 57.7481 62.419C57.6106 62.2818 57.5337 62.0958 57.5337 61.9016C57.5337 60.5002 57.5337 57.5751 57.5337 57.5751C57.5337 55.9225 58.7101 55.7018 60.3874 55.3011C64.3164 54.362 71.0579 52.7511 72.3766 52.4361C72.4315 52.4227 72.4896 52.4355 72.5339 52.4706C72.5782 52.5057 72.6041 52.559 72.6041 52.6154C72.6041 54.5123 72.6041 67.4156 72.6041 71.6368C72.6041 72.6311 71.7607 73.4373 70.7201 73.4373C63.3655 73.4373 36.6312 73.4373 29.2765 73.4373C28.777 73.4373 28.2979 73.2477 27.9444 72.9101C27.5913 72.5723 27.3926 72.1143 27.3926 71.6368C27.3926 68.0483 27.3926 58.2438 27.3926 55.0072C27.3926 54.1809 27.9811 53.4607 28.8197 53.2603C34.7995 51.8312 57.5337 46.3986 57.5337 46.3986C57.5337 46.3986 57.5337 39.1868 57.5337 36.3721V34.9433C57.5337 34.4274 57.3021 33.9365 56.8979 33.5947C56.4938 33.2529 55.9556 33.0931 55.42 33.1562C55.3971 33.159 40.7056 36.1026 40.7056 36.1026C40.7056 36.1026 40.7056 36.8682 40.7056 37.6958C40.7056 38.2117 40.9372 38.7026 41.3414 39.0444C41.6556 39.3103 42.0508 39.4661 42.4633 39.4923V44.238V44.3828C42.4633 45.2091 41.8748 45.9293 41.0361 46.13C37.6153 46.9474 29.1183 48.9778 27.62 49.3358C27.5652 49.3489 27.5074 49.3361 27.4631 49.301C27.4187 49.2663 27.3926 49.2129 27.3926 49.1562C27.3926 47.3868 27.3926 36.0514 27.3926 31.6326C27.3926 30.8005 27.9891 30.0769 28.8354 29.8818C32.7838 28.9771 43.8774 26.5625 49.9985 26.5625C56.1196 26.5625 67.2128 28.9771 71.1613 29.8833C72.0066 30.0781 72.6025 30.8011 72.6025 31.6326C72.6031 34.9494 72.6038 38.5514 72.6041 46.7962C72.6041 47.621 72.0175 48.3406 71.1804 48.5421C65.7672 49.8462 46.5882 54.4659 43.0324 55.3224C42.6977 55.4029 42.4633 55.6908 42.4633 56.021C42.4633 56.021 42.4633 60.1806 42.4633 61.9016C42.4633 62.3059 42.1354 62.6334 41.7312 62.6334C41.7309 62.6334 41.7306 62.6334 41.7302 62.6334C40.9184 62.6334 40.2603 63.2917 40.2603 64.1033C40.2603 65.0992 40.2603 66.2347 40.2603 66.2347Z" fill="white"/>
        </svg>
        <div class="pr-1">
          Andrew Cowley
        </div>
      </div>
      <div class="from-violet-500 to-rose-500 transition duration-500 group-hover:opacity-100 opacity-0 bg-gradient-to-r blur-md absolute inset-0"></div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  mounted () {
    const STAR_COUNT = ( window.innerWidth + window.innerHeight ) / 4,
      STAR_SIZE = 1,
      STAR_MIN_SCALE = 0.2,
      OVERFLOW_THRESHOLD = 50;

    const canvas = document.querySelector( 'canvas' ),
          context = canvas.getContext( '2d' );

    let scale = 1, // device pixel ratio
        width,
        height;

    let stars = [];

    let pointerX,
        pointerY;

    let velocity = { x: 0, y: 0, tx: 0, ty: 0, z: 0.0005 };

    let touchInput = false;

    generate();
    resize();
    step();

    window.onresize = resize;
    canvas.onmousemove = onMouseMove;
    canvas.ontouchmove = onTouchMove;
    canvas.ontouchend = onMouseLeave;
    document.onmouseleave = onMouseLeave;

    function generate() {

      for( let i = 0; i < STAR_COUNT; i++ ) {
        stars.push({
          x: 0,
          y: 0,
          z: STAR_MIN_SCALE + Math.random() * ( 1 - STAR_MIN_SCALE )
        });
      }

    }

    function placeStar( star ) {

      star.x = Math.random() * width;
      star.y = Math.random() * height;

    }

    function recycleStar( star ) {

      let direction = 'z';

      let vx = Math.abs( velocity.x ),
          vy = Math.abs( velocity.y );

      if( vx > 1 || vy > 1 ) {
        let axis;

        if( vx > vy ) {
          axis = Math.random() < vx / ( vx + vy ) ? 'h' : 'v';
        }
        else {
          axis = Math.random() < vy / ( vx + vy ) ? 'v' : 'h';
        }

        if( axis === 'h' ) {
          direction = velocity.x > 0 ? 'l' : 'r';
        }
        else {
          direction = velocity.y > 0 ? 't' : 'b';
        }
      }
      
      star.z = STAR_MIN_SCALE + Math.random() * ( 1 - STAR_MIN_SCALE );

      if( direction === 'z' ) {
        star.z = 0.1;
        star.x = Math.random() * width;
        star.y = Math.random() * height;
      }
      else if( direction === 'l' ) {
        star.x = -OVERFLOW_THRESHOLD;
        star.y = height * Math.random();
      }
      else if( direction === 'r' ) {
        star.x = width + OVERFLOW_THRESHOLD;
        star.y = height * Math.random();
      }
      else if( direction === 't' ) {
        star.x = width * Math.random();
        star.y = -OVERFLOW_THRESHOLD;
      }
      else if( direction === 'b' ) {
        star.x = width * Math.random();
        star.y = height + OVERFLOW_THRESHOLD;
      }

    }

    function resize() {

      scale = window.devicePixelRatio || 1;

      width = window.innerWidth * scale;
      height = window.innerHeight * scale;

      canvas.width = width;
      canvas.height = height;

      stars.forEach( placeStar );

    }

    function step() {

      context.clearRect( 0, 0, width, height );

      update();
      render();

      requestAnimationFrame( step );

    }

    function update() {

      velocity.tx *= 0.96;
      velocity.ty *= 0.96;

      velocity.x += ( velocity.tx - velocity.x ) * 0.8;
      velocity.y += ( velocity.ty - velocity.y ) * 0.8;

      stars.forEach( ( star ) => {

        star.x += velocity.x * star.z;
        star.y += velocity.y * star.z;

        star.x += ( star.x - width/2 ) * velocity.z * star.z;
        star.y += ( star.y - height/2 ) * velocity.z * star.z;
        star.z += velocity.z;
      
        // recycle when out of bounds
        if( star.x < -OVERFLOW_THRESHOLD || star.x > width + OVERFLOW_THRESHOLD || star.y < -OVERFLOW_THRESHOLD || star.y > height + OVERFLOW_THRESHOLD ) {
          recycleStar( star );
        }

      } );

    }

    function render() {

      stars.forEach( ( star ) => {

        context.beginPath();
        context.lineCap = 'round';
        context.lineWidth = STAR_SIZE * star.z * scale;
        context.strokeStyle = 'rgba(255,255,255,'+(0.5 + 0.5*Math.random())+')';

        context.beginPath();
        context.moveTo( star.x, star.y );

        var tailX = velocity.x * 2,
            tailY = velocity.y * 2;

        // stroke() wont work on an invisible line
        if( Math.abs( tailX ) < 0.1 ) tailX = 0.5;
        if( Math.abs( tailY ) < 0.1 ) tailY = 0.5;

        context.lineTo( star.x + tailX, star.y + tailY );

        context.stroke();

      } );

    }

    function movePointer( x, y ) {

      if( typeof pointerX === 'number' && typeof pointerY === 'number' ) {

        let ox = x - pointerX,
            oy = y - pointerY;

        velocity.tx = velocity.tx + ( ox / 8*scale ) * ( touchInput ? 1 : -1 );
        velocity.ty = velocity.ty + ( oy / 8*scale ) * ( touchInput ? 1 : -1 );

      }

      pointerX = x;
      pointerY = y;

    }

    function onMouseMove( event ) {

      touchInput = false;

      movePointer( event.clientX, event.clientY );

    }

    function onTouchMove( event ) {

      touchInput = true;

      movePointer( event.touches[0].clientX, event.touches[0].clientY, true );

      event.preventDefault();

    }

    function onMouseLeave() {

      pointerX = null;
      pointerY = null;

    }


  }
})
</script>

<style>
html {
  @apply bg-black;
}
</style>
