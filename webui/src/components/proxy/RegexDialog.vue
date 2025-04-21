<template>
  <v-dialog max-width="1200">
    <template v-slot:activator="{ props: activatorProps }">
      <v-icon @click="" v-bind="activatorProps" class="cursor-pointer"
        >mdi-help-circle</v-icon
      >
    </template>

    <template v-slot:default="{ isActive }">
      <v-card>
        <v-card-title class="text-center text-h4"
          >Regex Cheat sheet</v-card-title
        >
        <v-card-text>
          <v-row>
            <a href="https://en.wikipedia.org/wiki/Regular_expression"
              >What are regular expressions?</a
            >
          </v-row>
          <v-row>
            <v-col>
              <div class="HBdqg1GP80BV0XOA7dS9"></div>
              <section>
                <h3>Quantifiers</h3>
                <table class="table table-condensed">
                  <colgroup>
                    <col width="80" />
                  </colgroup>
                  <tbody>
                    <tr>
                      <td><i>n</i>*</td>
                      <td>0 or more <i>n</i></td>
                    </tr>
                    <tr>
                      <td><i>n</i>+</td>
                      <td>1 or more <i>n</i></td>
                    </tr>
                    <tr>
                      <td><i>n</i>?</td>
                      <td>0 or 1 <i>n</i></td>
                    </tr>
                    <tr>
                      <td><i>n</i>{2}</td>
                      <td>Exactly 2 <i>n</i></td>
                    </tr>
                    <tr>
                      <td><i>n</i>{2,}</td>
                      <td>2 or more <i>n</i></td>
                    </tr>
                    <tr>
                      <td><i>n</i>{2, 4}</td>
                      <td>2, 3 or 4 <i>n</i></td>
                    </tr>
                  </tbody>
                </table>
              </section>
              <section>
                <h3>Ranges</h3>
                <table class="table table-condensed">
                  <colgroup>
                    <col width="80" />
                  </colgroup>
                  <tbody>
                    <tr>
                      <td>.</td>
                      <td>Any character except new line (\n)</td>
                    </tr>
                    <tr>
                      <td>(A|B)</td>
                      <td>A or B</td>
                    </tr>
                    <tr>
                      <td>(...)</td>
                      <td>Group</td>
                    </tr>
                    <tr>
                      <td>[ABC]</td>
                      <td>Range (A, B or C)</td>
                    </tr>
                    <tr>
                      <td>[^ABC]</td>
                      <td>Not A, B or C</td>
                    </tr>
                    <tr>
                      <td>[A-Z]</td>
                      <td>Character between A and Z, upper case</td>
                    </tr>
                    <tr>
                      <td>[0-9]</td>
                      <td>Number between 0 and 9</td>
                    </tr>
                    <tr>
                      <td>[A-Z0-9]</td>
                      <td>
                        Characters between A and Z, and numbers between 0 and 9
                      </td>
                    </tr>
                    <tr>
                      <td>\<i>n</i></td>
                      <td>nth group/sub pattern</td>
                    </tr>
                  </tbody>
                </table>
              </section>
              <section>
                <h3>Anchors</h3>
                <table class="table table-condensed">
                  <colgroup>
                    <col width="80" />
                  </colgroup>
                  <tbody>
                    <tr>
                      <td>^</td>
                      <td>Start of line</td>
                    </tr>
                    <tr>
                      <td>$</td>
                      <td>End of line</td>
                    </tr>
                  </tbody>
                </table>
              </section>
            </v-col>
            <v-col>
              <section>
                <h3>Character Classes</h3>
                <table class="table table-condensed">
                  <colgroup>
                    <col width="80" />
                  </colgroup>
                  <tbody>
                    <tr>
                      <td>\w</td>
                      <td>Word (a-z, A-Z, 0-9, including _ (underscore))</td>
                    </tr>
                    <tr>
                      <td>\W</td>
                      <td>Non-word</td>
                    </tr>
                    <tr>
                      <td>\d</td>
                      <td>Digit (0-9)</td>
                    </tr>
                    <tr>
                      <td>\D</td>
                      <td>Non-digit</td>
                    </tr>
                    <tr>
                      <td>\s</td>
                      <td>Whitespace</td>
                    </tr>
                    <tr>
                      <td>\S</td>
                      <td>Not whitespace</td>
                    </tr>
                    <tr>
                      <td>\b</td>
                      <td>Match at beginning or end</td>
                    </tr>
                    <tr>
                      <td>\B</td>
                      <td>Do not match at beginning or end</td>
                    </tr>
                    <tr>
                      <td>\0</td>
                      <td>NUL character</td>
                    </tr>
                    <tr>
                      <td>\n</td>
                      <td>New line</td>
                    </tr>
                  </tbody>
                </table>
              </section>
              <section>
                <h3>Assertions</h3>
                <table class="table table-condensed">
                  <colgroup>
                    <col width="80" />
                  </colgroup>
                  <tbody>
                    <tr>
                      <td><i>n</i>(?=<i>o</i>)</td>
                      <td>
                        Lookahead, <i>n</i> followed by <i>o</i> <br />(not
                        matching <i>o</i>)
                      </td>
                    </tr>
                    <tr>
                      <td><i>n</i>(?!<i>o</i>)</td>
                      <td>
                        Negative lookahead, <i>n</i> not followed by <i>o</i>
                        <br />(not matching <i>o</i>)
                      </td>
                    </tr>
                  </tbody>
                </table>
              </section>
            </v-col>
          </v-row>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn text="Close Dialog" @click="isActive.value = false"></v-btn>
        </v-card-actions>
      </v-card>
    </template>
  </v-dialog>
</template>
