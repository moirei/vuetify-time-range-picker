<template>
  <v-app>
    <v-container fluid fill-height>
      <v-layout align-center justify-center>
        <v-flex xs12 sm8 md4>
          <div class="text-center">
            <v-avatar size="50">
              <img alt="Vue logo" src="./assets/logo.png" />
            </v-avatar>
          </div>
          <div class="text-center my-5 text-h5 font-weight-bold">
            vuetify-time-range-picker
          </div>
          <v-card>
            <v-row>
              <v-col>
                <v-switch
                  v-model="props['landscape']"
                  label="Landscape"
                  hide-details
                />
              </v-col>
              <v-col>
                <v-switch v-model="ampm" label="AM/PM" hide-details />
              </v-col>
              <v-col>
                <v-switch
                  v-model="props['ampmInTitle']"
                  label="AM/PM In Title"
                  hide-details
                />
              </v-col>
              <v-col>
                <v-switch
                  v-model="props['noTitle']"
                  label="No Title"
                  hide-details
                />
              </v-col>
              <v-col>
                <v-switch
                  v-model="props['useSeconds']"
                  label="Use seconds"
                  hide-details
                />
              </v-col>
              <v-col>
                <v-switch
                  v-model="props['readonly']"
                  label="Readonly"
                  hide-details
                />
              </v-col>
              <v-col>
                <v-switch
                  v-model="props['rounded']"
                  label="Rounded"
                  hide-details
                />
              </v-col>
              <v-col>
                <v-switch
                  v-model="props['shaped']"
                  label="Shaped"
                  hide-details
                />
              </v-col>
              <v-col>
                <v-switch v-model="props['dark']" label="Dark" hide-details />
              </v-col>
              <v-col>
                <v-switch
                  v-model="props['outlined']"
                  label="Outlined"
                  hide-details
                />
              </v-col>
            </v-row>
          </v-card>
          <v-time-range-picker
            class="mt-10"
            v-model="time"
            v-bind="props"
            :format="format"
          />
          <p>time range: {{ time }}</p>
        </v-flex>
      </v-layout>
    </v-container>
  </v-app>
</template>

<script>
import VTimeRangePicker from "./components/VTimeRangePicker";

export default {
  name: "App",
  components: { VTimeRangePicker },
  data: () => ({
    time: null,
    props: {},
    ampm: false,
  }),
  computed: {
    format() {
      return this.ampm ? "ampm" : "24hr";
    },
  },
};
</script>

<style>
#app {
  background-color: #e6ebf1;
}
</style>
