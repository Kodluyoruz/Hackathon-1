<script>
import Navbar from "../components/Navbar";
import ContentLoader from "../components/ContentLoader";
import Kemal from "../assets/kemal.jpeg";
import Sezer from "../assets/sezer.jpg";
import Cengiz from "../assets/cengiz.jpg";
import Ferhat from "../assets/ferhat.jpg";

export default {
  props: {
    member: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      isLoading: false,
      members: [
        {
          name: "Kemal Mutlu",
          title: "Back-End Developer",
          img: Kemal,
          desc: `https://www.linkedin.com/in/kemalmutlu`,
        },
        {
          name: "Sezer İstif",
          title: "Software Engineer",
          img: Sezer,
          desc: `https://www.linkedin.com/in/sezer-istif`,
        },
        {
          name: "Cengiz C. Mataracı",
          title: "Full Stack Developer",
          img: Cengiz,
          desc: `https://www.linkedin.com/in/cengizcmataraci`,
        },
        {
          name: "Ferhat Demir",
          title: "Front-End Developer",
          img: Ferhat,
          desc: `https://www.linkedin.com/in/demirferhat`,
        },
      ],
    };
  },
  components: {
    Navbar,
    ContentLoader,
  },
};
</script>

<template>
  <div class="hackathon-team-wrapper">
    <Navbar />
    <div class="hackathon-detail">
      <content-loader v-if="isLoading" />
      <template v-else>
        <div class="hackathon-detail__header">
          <div class="location-contain">
            <div class="container">
              <div class="row">
            <div class="locations col-3" v-for="member in members" :key="member.name">
                    <div
                      :member="member"
                      class="card border-0"
                      style="width: 100%; height: 100%; margin-right: 15px;"
                    >
                      <div
                        class="card body border-0 text-center"
                        style="height: 100%;"
                      >
                        <img
                          :src="member.img"
                          class="card-img-top"
                          style="width: 220px; height: 280px; border-radius: 50px;    "
                        />
                        <h3 style="margin-top: 10px;">{{ member.name }}</h3>
                        <h6>{{ member.title }}</h6>
                        <h6><a :href="member.desc" target="_blank">{{ member.desc }}</a></h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<style lang="scss">
$bg-color: rgb(249, 250, 251);
$content-color: rgb(75, 85, 99);
$box-shadow: 0 0.5em 1em -0.125em rgba(10, 10, 10, 0.1),
  0 0 0 1px rgba(10, 10, 10, 0.02);

.hackathon-team-wrapper {
  max-width: 1280px;
  width: 100%;
  margin: 0 auto;
  padding: 2rem;

  .hackathon-detail {
    margin: 3rem 0;
    border-radius: 8px;
    text-align: center;
    padding: 1rem 4rem;
    box-shadow: $box-shadow;
  }
}

.location-contain {
  display: flex;
  justify-content: center;
}

.place {
  display: flex;
  flex-direction: column;
  width: 280px;
  height: 320px;
  justify-content: center;
  background: white;
  border: 1px solid #ddd;
  padding: 20px 20px;
  margin: 10px;

  h2 {
    margin: 0;
    text-align: center;
  }
  img {
    margin: 10px;
    align-self: center;
  }
}
</style>
