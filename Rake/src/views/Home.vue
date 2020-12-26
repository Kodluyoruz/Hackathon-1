<script>
import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import HackathonList from "@/components/HackathonList";
import Timer from "@/components/Timer";
import FAQ from "@/components/FAQ";
import GoTop from '@inotom/vue-go-top';
import Sponsor from "@/components/Sponsor";
import Contact from "@/components/Contact";

export default {
  components: {
    Navbar,
    Header,
    HackathonList,
    Timer,
    FAQ,
    GoTop,
    Sponsor,
    Contact,
  }
};
</script>

<template>
  <div class="home">
    <go-top :bottom="15"></go-top>
    <Navbar />
    <Header />
    <Timer />
    <Hackathon-List />
    <FAQ />
    <Sponsor />
    <Contact />
  </div>
</template>

<style lang="scss">
.home {
  max-width: 1280px;
  width: 100%;
  margin: 0 auto;
  padding: 2rem;
}
</style>
