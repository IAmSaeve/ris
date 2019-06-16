<template>
  <div id="page-wrapper">
    <section id="two" class="wrapper alt style2">
      <section class="spotlight">
        <div class="image"><img src="../assets/pic01.jpg" /></div>
        <div class="content">
          <h2>
            Praktikpladser i alt
          </h2>
          <p>
            Der er i dag registreret
            <u
              ><strong style="font-size: 1.3rem;">{{
                this.$store.getters.mergedData.length
              }}</strong></u
            >
            praktikpladser i region hovedstaden.
          </p>
        </div>
      </section>
      <section class="spotlight">
        <div class="image"><img src="../assets/pic02.jpg" /></div>
        <div class="content">
          <h2>
            LOREM IPSUM
          </h2>
          <p>
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua
          </p>
        </div>
      </section>
      <section class="spotlight">
        <div class="image"><img src="../assets/pic03.jpg" /></div>
        <div class="content">
          <h2>
            LOREM IPSUM
          </h2>
          <p>
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua
          </p>
        </div>
      </section>
    </section>

    <footer id="footer">
      <ul class="icons">
        <li>
          <a
            href="https://twitter.com/sebkirller"
            target="_blank"
            rel="noopener noreferrer"
            class="icon brands fa-twitter"
            ><span class="label">Twitter</span></a
          >
        </li>
        <li>
          <a href="mailto:sebastian@srmail.dk" class="icon solid fa-envelope"
            ><span class="label">Email</span></a
          >
        </li>
      </ul>
      <ul class="copyright">
        <li>&copy; Sebastian Petersen</li>
        <li>
          Kæmpe tak til: <a href="http://html5up.net">HTML5 UP</a> for designet
        </li>
      </ul>
    </footer>
  </div>
</template>

<script>
export default {
  name: "home"
};
</script>

<style scoped src="@/css/main.css"></style>
