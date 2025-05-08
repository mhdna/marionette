<template>
  <v-container fluid class="d-flex flex-column">
    <!-- <v-row> -->
    <!-- <v-col :md="10"> -->
    <div class="d-flex mb-4 justify-space-between">
      <!-- <AddRedirectCard class="me-2 flex-grow-1" /> -->
      <ActionCard title="Add A Redirect" icon="mdi-plus" class="me-2" />
      <ActionCard
        title="Manage Redirects Categories"
        icon="mdi-tune"
        class="me-2"
      />
      <ActionCard title="Enforce Safe Search" icon="mdi-security" />
    </div>
    <!-- <v-card class="mb-4"> -->
    <!--   <SafeSearchCard /> -->
    <!-- </v-card> -->
    <v-card>
      <div class="d-flex">
        <v-toolbar density="compact" class="px-4">
          <div class="me-2">
            <v-tooltip
              max-width="250"
              text="Transparently redirect a URL (could be a regexp) to another one, transparently (i.e. the user would not know about it.)."
              location="bottom"
            >
              <template v-slot:activator="{ props }">
                <v-icon v-bind="props" color="grey"
                  >mdi-help-circle-outline</v-icon
                >
              </template>
            </v-tooltip>
          </div>
          <div style="font-size: 18px" class="font-weight-bold">
            Redirects Table
          </div>
          <v-spacer />
          <v-text-field
            v-model="search"
            class="mt-5 me-2"
            max-width="400"
            placeholder="Search Redirect"
            menu-icon=""
            density="compact"
            variant="outlined"
            prepend-inner-icon="mdi-magnify"
            auto-select-first
            item-props
            border
          ></v-text-field>
          <!-- <v-btn variant="flat" class="ml-3 mt-1"> Search </v-btn> -->
          <!-- <v-btn -->
          <!--   class="px-2 me-2" -->
          <!--   prepend-icon="mdi-plus" -->
          <!--   variant="text" -->
          <!--   text="Add a Redirect" -->
          <!--   border="sm" -->
          <!--   @click="add" -->
          <!-- ></v-btn> -->
          <!-- <v-btn -->
          <!--   class="px-2 me-2" -->
          <!--   prepend-icon="mdi-tune" -->
          <!--   variant="text" -->
          <!--   text="Manage categories" -->
          <!--   border -->
          <!--   @click="toggleCategoriesManagerDialog" -->
          <!-- ></v-btn> -->
          <!-- <SafeSearchMenu> -->
          <!--   <v-btn -->
          <!--     class="px-2" -->
          <!--     prepend-icon="mdi-magnify" -->
          <!--     variant="text" -->
          <!--     text="Safe Search" -->
          <!--     border -->
          <!--   ></v-btn> -->
          <!-- </SafeSearchMenu> -->
        </v-toolbar>
      </div>
      <v-data-table
        density="compact"
        items-per-page="20"
        hover
        item-selectable
        :headers="headers"
        :search="search"
        :items="urls"
      >
        <template v-slot:item.from="{ item }">
          <v-row>
            <v-chip
              class="overflow-y-auto"
              :text="item.from"
              size="x-medium"
              label
            />
            <!-- @click="edit(item.id)" -->
            <!-- @mouseover="hoverUrl = item.id" -->
            <!-- @mouseleave="hoverUrl = null" -->
            <!-- <template v-slot:prepend> -->
            <!--   <v-icon -->
            <!--     class="mr-1" -->
            <!--     :color=" -->
            <!--       hoverUrl === item.id ? 'primary' : 'medium-emphasis' -->
            <!--     " -->
            <!--   > -->
            <!--     {{ hoverUrl === item.id ? "mdi-pencil" : "mdi-link" }} -->
            <!--   </v-icon> -->
            <!-- </template> -->
            <!-- </v-chip> -->
          </v-row>
        </template>
        <template v-slot:item.to="{ item }">
          <v-row>
            <v-chip
              class="overflow-y-auto"
              :text="item.to"
              size="x-medium"
              label
            />
            <!-- @click="edit(item.id)" -->
            <!-- @mouseover="hoverUrl = item.id" -->
            <!-- @mouseleave="hoverUrl = null" -->
            <!-- <template v-slot:prepend> -->
            <!--   <v-icon -->
            <!--     class="mr-1" -->
            <!--     :color=" -->
            <!--       hoverUrl === item.id ? 'primary' : 'medium-emphasis' -->
            <!--     " -->
            <!--   > -->
            <!--     {{ hoverUrl === item.id ? "mdi-pencil" : "mdi-link" }} -->
            <!--   </v-icon> -->
            <!-- </template> -->
            <!-- </v-chip> -->
          </v-row>
        </template>
      </v-data-table>
    </v-card>
    <!-- </v-container> -->

    <!-- <v-row v-for="url in urls" mx="auto" justify="left"> -->
    <!--   <v-chip max-width="200" class="overflow-y-auto">{{ -->
    <!--     url.from -->
    <!--   }}</v-chip> -->
    <!--   <v-btn -->
    <!--     border -->
    <!--     icon="mdi-arrow-right" -->
    <!--     size="small" -->
    <!--     variant="text" -->
    <!--   ></v-btn> -->
    <!--   <v-chip max-width="200" class="overflow-y-auto">{{ url.to }}</v-chip> -->
    <!-- </v-row> -->
    <!-- </v-col> -->
    <!-- <v-divider thickness="14" vertical /> -->
    <!-- <v-col :md="2" :sm="12"> -->
    <!-- <div class="position-fixed flex-1-100 right-0"> -->
    <!-- <SafeSearchCard /> -->
    <!-- </div> -->
    <!-- </v-col> -->
    <!-- </v-row> -->
  </v-container>
</template>

<script setup>
const headers = [
  { title: "Category", key: "category", align: "start" },
  { title: "Group", key: "group", align: "start" },
  { title: "IsRegexp", key: "isregexp", align: "start" },
  { title: "From", key: "from", align: "start" },
  { title: "To", key: "to", align: "start" },
];
const urls = [
  {
    from: "https://www.google.com/search?q=long+url+testing+examples+for+browse",
    to: "https://www.google.com/search?q=long+url+testing+examples+for+browse",
  },
  {
    from: "https://www.facebook.com/groups/1234567890123456/long-url-check-test",
    to: "https://www.facebook.com/groups/1234567890123456/long-url-check-test",
  },
  {
    from: "https://www.amazon.com/s?k=testing+long+url+examples+for+validations",
    to: "https://www.amazon.com/s?k=testing+long+url+examples+for+validations",
  },
  {
    from: "https://www.twitter.com/search?q=testing+long+url+examples+for+compa",
    to: "https://www.twitter.com/search?q=testing+long+url+examples+for+compa",
  },
  {
    from: "https://www.linkedin.com/search/results/all/?keywords=longurltest+fo",
    to: "https://www.linkedin.com/search/results/all/?keywords=longurltest+fo",
  },
  {
    from: "https://www.reddit.com/r/testinglongurls/long-url-validation-test",
    to: "https://www.reddit.com/r/testinglongurls/long-url-validation-test",
  },
  {
    from: "https://www.wikipedia.org/wiki/URL+testing+long+example+for+compatib",
    to: "https://www.wikipedia.org/wiki/URL+testing+long+example+for+compatib",
  },
  {
    from: "https://www.github.com/search?q=long+url+testing+examples+for+server",
    to: "https://www.github.com/search?q=long+url+testing+examples+for+server",
  },
  {
    from: "https://www.instagram.com/explore/tags/urltest+validation+testing+la",
    to: "https://www.instagram.com/explore/tags/urltest+validation+testing+la",
  },
  {
    from: "https://www.pinterest.com/search/pins/?q=long+url+testing+for+webpag",
    to: "https://www.pinterest.com/search/pins/?q=long+url+testing+for+webpag",
  },
  {
    from: "https://www.stackoverflow.com/questions/long-url+test+for+web+perfor",
    to: "https://www.stackoverflow.com/questions/long-url+test+for+web+perfor",
  },
  {
    from: "https://www.quora.com/long-url+performance+testing+for+website+valid",
    to: "https://www.quora.com/long-url+performance+testing+for+website+valid",
  },
  {
    from: "https://www.medium.com/@longurltest/testing-long-url+validation+for+",
    to: "https://www.medium.com/@longurltest/testing-long-url+validation+for+",
  },
  {
    from: "https://www.nytimes.com/long-url+test+for+page+performance+and+valid",
    to: "https://www.nytimes.com/long-url+test+for+page+performance+and+valid",
  },
  {
    from: "https://www.bbc.com/news/long-url+test+for+page+loading+time+perform",
    to: "https://www.bbc.com/news/long-url+test+for+page+loading+time+perform",
  },
  {
    from: "https://www.cnn.com/long-url+performance+check+and+validation+test+f",
    to: "https://www.cnn.com/long-url+performance+check+and+validation+test+f",
  },
  {
    from: "https://www.nationalgeographic.com/science/long-url+test+for+website",
    to: "https://www.nationalgeographic.com/science/long-url+test+for+website",
  },
  {
    from: "https://www.bbc.co.uk/programmes/long-url+testing+to+validate+webpag",
    to: "https://www.bbc.co.uk/programmes/long-url+testing+to+validate+webpag",
  },
  {
    from: "https://www.cnbc.com/long-url+performance+test+for+web+traffic+load+",
    to: "https://www.cnbc.com/long-url+performance+test+for+web+traffic+load+",
  },
  {
    from: "https://www.forbes.com/sites/long-url+test+to+check+valid+urls+for+l",
    to: "https://www.forbes.com/sites/long-url+test+to+check+valid+urls+for+l",
  },
  {
    from: "https://www.washingtonpost.com/long-url+test+checking+website+perfor",
    to: "https://www.washingtonpost.com/long-url+test+checking+website+perfor",
  },
  {
    from: "https://www.theguardian.com/long-url+testing+for+handling+of+long+ur",
    to: "https://www.theguardian.com/long-url+testing+for+handling+of+long+ur",
  },
  {
    from: "https://www.aljazeera.com/long-url+performance+test+to+check+website",
    to: "https://www.aljazeera.com/long-url+performance+test+to+check+website",
  },
  {
    from: "https://www.vogue.com/long-url+testing+for+page+load+times+on+websit",
    to: "https://www.vogue.com/long-url+testing+for+page+load+times+on+websit",
  },
  {
    from: "https://www.wsj.com/articles/long-url+test+for+handling+page+perform",
    to: "https://www.wsj.com/articles/long-url+test+for+handling+page+perform",
  },
  {
    from: "https://www.reuters.com/long-url+validation+test+checking+web+server",
    to: "https://www.reuters.com/long-url+validation+test+checking+web+server",
  },
  {
    from: "https://www.theverge.com/long-url+performance+check+for+website+vali",
    to: "https://www.theverge.com/long-url+performance+check+for+website+vali",
  },
  {
    from: "https://www.slate.com/long-url+testing+for+server+response+time+on+l",
    to: "https://www.slate.com/long-url+testing+for+server+response+time+on+l",
  },
  {
    from: "https://www.techcrunch.com/long-url+validation+test+to+check+for+pag",
    to: "https://www.techcrunch.com/long-url+validation+test+to+check+for+pag",
  },
  {
    from: "https://www.buzzfeed.com/long-url+testing+for+validating+server+resp",
    to: "https://www.buzzfeed.com/long-url+testing+for+validating+server+resp",
  },
  {
    from: "https://www.rollingstone.com/long-url+testing+performance+and+load+t",
    to: "https://www.rollingstone.com/long-url+testing+performance+and+load+t",
  },
  {
    from: "https://www.politico.com/long-url+testing+for+server+response+and+pa",
    to: "https://www.politico.com/long-url+testing+for+server+response+and+pa",
  },
  {
    from: "https://www.businessinsider.com/long-url+testing+for+page+loading+on",
    to: "https://www.businessinsider.com/long-url+testing+for+page+loading+on",
  },
  {
    from: "https://www.usatoday.com/long-url+check+for+performance+testing+on+l",
    to: "https://www.usatoday.com/long-url+check+for+performance+testing+on+l",
  },
  {
    from: "https://www.foxnews.com/long-url+testing+for+web+pages+with+large+ur",
    to: "https://www.foxnews.com/long-url+testing+for+web+pages+with+large+ur",
  },
  {
    from: "https://www.apnews.com/long-url+testing+for+checking+large+links+on+",
    to: "https://www.apnews.com/long-url+testing+for+checking+large+links+on+",
  },
  {
    from: "https://www.npr.org/long-url+test+to+validate+web+pages+performance+",
    to: "https://www.npr.org/long-url+test+to+validate+web+pages+performance+",
  },
  {
    from: "https://www.mashable.com/long-url+validation+test+on+website+perform",
    to: "https://www.mashable.com/long-url+validation+test+on+website+perform",
  },
  {
    from: "https://www.entrepreneur.com/article/long-url+performance+testing+fo",
    to: "https://www.entrepreneur.com/article/long-url+performance+testing+fo",
  },
  {
    from: "https://www.theatlantic.com/long-url+validation+check+for+browser+pe",
    to: "https://www.theatlantic.com/long-url+validation+check+for+browser+pe",
  },
  {
    from: "https://www.smithsonianmag.com/long-url+testing+for+performance+chec",
    to: "https://www.smithsonianmag.com/long-url+testing+for+performance+chec",
  },
  {
    from: "https://www.economist.com/long-url+test+for+checking+page+performanc",
    to: "https://www.economist.com/long-url+test+for+checking+page+performanc",
  },
  {
    from: "https://www.sfgate.com/long-url+check+for+testing+browser+and+server",
    to: "https://www.sfgate.com/long-url+check+for+testing+browser+and+server",
  },
  {
    from: "https://www.merriam-webster.com/dictionary/long-url+test+for+validat",
    to: "https://www.merriam-webster.com/dictionary/long-url+test+for+validat",
  },
  {
    from: "https://www.webmd.com/long-url+validation+test+for+website+performan",
    to: "https://www.webmd.com/long-url+validation+test+for+website+performan",
  },
  {
    from: "https://www.housebeautiful.com/long-url+testing+for+validating+brows",
    to: "https://www.housebeautiful.com/long-url+testing+for+validating+brows",
  },
  {
    from: "https://www.architecturaldigest.com/long-url+testing+to+validate+web",
    to: "https://www.architecturaldigest.com/long-url+testing+to+validate+web",
  },
  {
    from: "https://www.wired.com/long-url+testing+and+performance+check+for+lar",
    to: "https://www.wired.com/long-url+testing+and+performance+check+for+lar",
  },
  {
    from: "https://www.bustle.com/long-url+test+for+checking+web+performance+on",
    to: "https://www.bustle.com/long-url+test+for+checking+web+performance+on",
  },
  {
    from: "https://www.self.com/long-url+test+to+validate+website+performance+w",
    to: "https://www.self.com/long-url+test+to+validate+website+performance+w",
  },
  {
    from: "https://www.newyorker.com/long-url+testing+for+performance+on+web+pa",
    to: "https://www.newyorker.com/long-url+testing+for+performance+on+web+pa",
  },
  {
    from: "https://www.huffpost.com/long-url+testing+for+valid+urls+on+websites",
    to: "https://www.huffpost.com/long-url+testing+for+valid+urls+on+websites",
  },
  {
    from: "https://www.instyle.com/long-url+test+for+checking+browser+compatibi",
    to: "https://www.instyle.com/long-url+test+for+checking+browser+compatibi",
  },
  {
    from: "https://www.style.com/long-url+test+for+web+page+performance+check+o",
    to: "https://www.style.com/long-url+test+for+web+page+performance+check+o",
  },
  {
    from: "https://www.dailystar.co.uk/long-url+performance+testing+for+pages+w",
    to: "https://www.dailystar.co.uk/long-url+performance+testing+for+pages+w",
  },
  {
    from: "https://www.independent.co.uk/long-url+test+for+testing+page+perform",
    to: "https://www.independent.co.uk/long-url+test+for+testing+page+perform",
  },
  {
    from: "https://www.thedailybeast.com/long-url+test+to+check+website+perform",
    to: "https://www.thedailybeast.com/long-url+test+to+check+website+perform",
  },
  {
    from: "https://www.washingtonexaminer.com/long-url+test+for+website+perform",
    to: "https://www.washingtonexaminer.com/long-url+test+for+website+perform",
  },
  {
    from: "https://www.ladbible.com/long-url+testing+for+website+performance+on",
    to: "https://www.ladbible.com/long-url+testing+for+website+performance+on",
  },
  {
    from: "https://www.metro.co.uk/long-url+test+for+validating+browser+handlin",
    to: "https://www.metro.co.uk/long-url+test+for+validating+browser+handlin",
  },
  {
    from: "https://www.sundaytimes.co.uk/long-url+test+for+checking+performance",
    to: "https://www.sundaytimes.co.uk/long-url+test+for+checking+performance",
  },
  {
    from: "https://www.telegraph.co.uk/long-url+test+to+check+browser+performan",
    to: "https://www.telegraph.co.uk/long-url+test+to+check+browser+performan",
  },
];
</script>

<!-- <route lang="yaml"> -->
<!-- meta: -->
<!--   layout: proxy -->
<!-- </route> -->
