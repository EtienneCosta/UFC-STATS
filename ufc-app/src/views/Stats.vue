<template>



  <div>
    <h1
      style="
        font-weight: bold;
        color: black;
        text-align: center;
        margin-top: 50px;
      "
    >
      RECORD BOOK
    </h1>

    <div class="all-stats" style="margin-top: 100px; font-weight: bold">
      <b-tabs content-class="mt-3" justified>
        <b-tab title="Career" active>
          <div class="results-content">
            <article class="results-group Fights-group">
              <header>
                <h3>UFC Total Fights</h3>
                <p></p>
              </header>

              <div class="results-table">
                <div class="results-table--tr results-table--th">
                  <span>Rnk</span>
                  <span>Fighter</span>
                  <span>
                    <span>Total</span>
                  </span>
                </div>
               
                  <div v-for="(c, index) in careers[0]" :key="index" class="results-table--tr">
                    <span>{{ index + 1 }}</span>
                    <span>
                       <router-link :to="{ name: 'Fighter', params: { id: c.Id } }">
                            <u>{{ c.Name }}</u>
                       </router-link>
                    </span>
                    <span>{{ c.TotalFights }}</span>
                  </div>
              </div>
            </article>

            <!-- MMA TOTALS FIGHTS -->
             <article class="results-group Fights-group">
              <header>
                <h3>MMA Total Fights</h3>
                <p></p>
              </header>

              <div class="results-table">
                <div class="results-table--tr results-table--th">
                  <span>Rnk</span>
                  <span>Fighter</span>
                  <span>
                    <span>Total</span>
                  </span>
                </div>

                
                  <div v-for="(c, index) in careers[1]" :key="index" class="results-table--tr">
                    <span>{{ index + 1 }}</span>
                    <span>
                       <router-link :to="{ name: 'Fighter', params: { id: c.Id } }">
                            <u>{{ c.Name }}</u>
                       </router-link>
                    </span>
                    <span>{{ c.TotalFights }}</span>
                  </div>
              </div>
            </article>



            <!-- WINS  -->
             <article class="results-group Fights-group">
              <header>
                <h3>WINS</h3>
                <p></p>
              </header>

              <div class="results-table">
                <div class="results-table--tr results-table--th">
                  <span>Rnk</span>
                  <span>Fighter</span>
                  <span>
                    <span>Total</span>
                  </span>
                </div>

                  <div v-for="(c, index) in careers[2]" :key="index" class="results-table--tr">
                    <span>{{ index + 1 }}</span>
                    <span>
                        <router-link :to="{ name: 'Fighter', params: { id: c.ID } }">
                            <u>{{ c.Name }}</u>
                       </router-link>
                    </span>
                    <span>{{ c.TotalFights }}</span>
                  </div>
              </div>
            </article>


            <!-- Title Fight Wins -->

             <article class="results-group Fights-group">
              <header>
                <h3>TITLE FIGHT WINS</h3>
                <p></p>
              </header>

              <div class="results-table">
                <div class="results-table--tr results-table--th">
                  <span>Rnk</span>
                  <span>Fighter</span>
                  <span>
                    <span>Total</span>
                  </span>
                </div>               
                  <div v-for="(c, index) in careers[3]" :key="index" class="results-table--tr">
                    <span>{{ index + 1 }}</span>
                    <span>
                        <router-link :to="{ name: 'Fighter', params: { id: c.ID } }">
                            <u>{{ c.Name }}</u>
                       </router-link>
                    </span>
                    <span>{{ c.TotalFights }}</span>
                  </div>
              </div>
            </article>


            <!--KO/TKO-->

 <article class="results-group Fights-group">
              <header>
                <h3>KO/TKO WINS</h3>
                <p></p>
              </header>

              <div class="results-table">
                <div class="results-table--tr results-table--th">
                  <span>Rnk</span>
                  <span>Fighter</span>
                  <span>
                    <span>Total</span>
                  </span>
                </div>

                <div v-for="(c, index) in careers[4]" :key="index" class="results-table--tr">
                    <span>{{ index + 1 }}</span>
                    <span>
                        <router-link :to="{ name: 'Fighter', params: { id: c.ID } }">
                            <u>{{ c.Name }}</u>
                       </router-link>
                    </span>
                    <span>{{ c.TotalFights }}</span>
                  </div>
              </div>
            </article>


<!--SUBMISSION WINS -->

 <article class="results-group Fights-group">
              <header>
                <h3>SUBMISSION WINS</h3>
                <p></p>
              </header>

              <div class="results-table">
                <div class="results-table--tr results-table--th">
                  <span>Rnk</span>
                  <span>Fighter</span>
                  <span>
                    <span>Total</span>
                  </span>
                </div>

                  <div v-for="(c, index) in careers[5]" :key="index"  class="results-table--tr">
                    <span>{{ index + 1 }}</span>
                    <span>
                        <router-link :to="{ name: 'Fighter', params: { id: c.ID } }">
                            <u>{{ c.Name }}</u>
                       </router-link>
                    </span>
                    <span>{{ c.TotalFights }}</span>
                  </div>
              </div>
            </article>


            <!--FINISHES-->

             <article class="results-group Fights-group">
              <header>
                <h3>FINISHES</h3>
                <p></p>
              </header>

              <div class="results-table">
                <div class="results-table--tr results-table--th">
                  <span>Rnk</span>
                  <span>Fighter</span>
                  <span>
                    <span>Total</span>
                  </span>
                </div>

                  <div v-for="(c, index) in careers[6]" :key="index" class="results-table--tr">
                    <span>{{ index + 1 }}</span>
                    <span>
                        <router-link :to="{ name: 'Fighter', params: { id: c.ID } }">
                            <u>{{ c.Name }}</u>
                       </router-link>
                    </span>
                    <span>{{ c.TotalFights }}</span>
                  </div>
              </div>
            </article>



            <!--DECISION-->
             <article class="results-group Fights-group">
              <header>
                <h3>DECISION WINS</h3>
                <p></p>
              </header>

              <div class="results-table">
                <div class="results-table--tr results-table--th">
                  <span>Rnk</span>
                  <span>Fighter</span>
                  <span>
                    <span>Total</span>
                  </span>
                </div>
               

                  <div v-for="(c, index) in careers[7]" :key="index" class="results-table--tr">
                    <span>{{ index + 1 }}</span>
                    <span>
                        <router-link :to="{ name: 'Fighter', params: { id: c.ID } }">
                            <u>{{ c.Name }}</u>
                       </router-link>
                    </span>
                    <span>{{ c.TotalFights }}</span>
                  </div>
              </div>
            </article>



<!--STRIKE ACCURACYY -->

             <article class="results-group Fights-group">
              <header>
                <h3>STRIKE ACCURACYY</h3>
                <p></p>
              </header>

              <div class="results-table">
                <div class="results-table--tr results-table--th">
                  <span>Rnk</span>
                  <span>Fighter</span>
                  <span>
                    <span>Total</span>
                  </span>
                </div>

                
                  <div v-for="(c, index) in careers[8]" :key="index" class="results-table--tr">
                    <span>{{ index + 1 }}</span>
                    <span>
                      <router-link :to="{ name: 'Fighter', params: { id: c.ID } }">
                            <u>{{ c.Name }}</u>
                       </router-link>
                    </span>
                    <span>{{ c.TotalFights }}</span>
                  </div>
              </div>
            </article>


            <!--STRIKES LANDED PER MIN -->
            <article class="results-group Fights-group">
              <header>
                <h3>STRIKES LANDED PER MIN</h3>
                <p></p>
              </header>

              <div class="results-table">
                <div class="results-table--tr results-table--th">
                  <span>Rnk</span>
                  <span>Fighter</span>
                  <span>
                    <span>Total</span>
                  </span>
                </div>

              
                  <div v-for="(c, index) in careers[9]" :key="index" class="results-table--tr">
                    <span>{{ index + 1 }}</span>
                    <span>
                      <router-link :to="{ name: 'Fighter', params: { id: c.ID } }">
                            <u>{{ c.Name }}</u>
                       </router-link>
                    </span>
                    <span>{{ c.TotalFights }}</span>
                  </div>
              </div>
            </article>

            <!--STRIKE DEFENSE-->

            <article class="results-group Fights-group">
              <header>
                <h3>STRIKE DEFENSE</h3>
                <p></p>
              </header>

              <div class="results-table">
                <div class="results-table--tr results-table--th">
                  <span>Rnk</span>
                  <span>Fighter</span>
                  <span>
                    <span>Total</span>
                  </span>
                </div>

                <div v-for="(c, index) in careers[10]" :key="index" class="results-table--tr">
                    <span>{{ index + 1 }}</span>
                    <span>
                      <router-link :to="{ name: 'Fighter', params: { id: c.ID } }">
                            <u>{{ c.Name }}</u>
                       </router-link>
                    </span>
                    <span>{{ c.TotalFights }}</span>
                  </div>
              </div>
            </article>


            <!--TAKEDOWN ACCURACY-->

            <article class="results-group Fights-group">
              <header>
                <h3>TAKEDOWN ACCURACY</h3>
                <p></p>
              </header>

              <div class="results-table">
                <div class="results-table--tr results-table--th">
                  <span>Rnk</span>
                  <span>Fighter</span>
                  <span>
                    <span>Total</span>
                  </span>
                </div>
                

                  <div v-for="(c, index) in careers[11]" :key="index" class="results-table--tr">
                    <span>{{ index + 1 }}</span>
                    <span>
                     <router-link :to="{ name: 'Fighter', params: { id: c.ID } }">
                            <u>{{ c.Name }}</u>
                       </router-link>
                    </span>
                    <span>{{ c.TotalFights }}</span>
                  </div>
              </div>
            </article>

            <!--TAKEDOWN DEFENSE-->
                        <article class="results-group Fights-group">
              <header>
                <h3>TAKEDOWN DEFENSE</h3>
                <p></p>
              </header>

              <div class="results-table">
                <div class="results-table--tr results-table--th">
                  <span>Rnk</span>
                  <span>Fighter</span>
                  <span>
                    <span>Total</span>
                  </span>
                </div>

                 

                  <div v-for="(c, index) in careers[12]" :key="index" class="results-table--tr">
                    <span>{{ index + 1 }}</span>
                    <span>
                      <router-link :to="{ name: 'Fighter', params: { id: c.ID } }">
                            <u>{{ c.Name }}</u>
                       </router-link>
                    </span>
                    <span>{{ c.TotalFights }}</span>
                  </div>
              </div>
            </article>

            <!--SUBMISSION AVERAGE-->
            <article class="results-group Fights-group">
              <header>
                <h3>SUBMISSION AVERAGE</h3>
                <p></p>
              </header>

              <div class="results-table">
                <div class="results-table--tr results-table--th">
                  <span>Rnk</span>
                  <span>Fighter</span>
                  <span>
                    <span>Total</span>
                  </span>
                </div>

                  
                  <div v-for="(c, index) in careers[13]" :key="index" class="results-table--tr">
                    <span>{{ index + 1 }}</span>
                    <span>
                      <router-link :to="{ name: 'Fighter', params: { id: c.ID } }">
                            <u>{{ c.Name }}</u>
                       </router-link>
                    </span>
                    <span>{{ c.TotalFights }}</span>
                  </div>
              </div>
            </article>
            
          </div>
        </b-tab>


        <!--FIGHT STATS  -->
        <b-tab title="Fight">
          <div class="results-content">
            <article class="results-group Fights-group">
              <header>
                <h3>Fastest Finish</h3>
                <p></p>
              </header>

         

              <div class="results-table">
                <div class="results-table--tr results-table--th">
                  <span>Rnk</span>
                  <span>Fighter</span>
                  <span>
                    <span>Total</span>
                  </span>
                </div>

                  <div v-for="(f, index) in fights[0]" :key="index" class="results-table--tr">
                    <span>{{ index + 1 }}</span>
                    <span>
                      <span>
                          <router-link :to="{ name: 'Fighter', params: { id: f.Red.toLowerCase().replaceAll(' ','_') } }">
                            {{ f.Red }}
                          </router-link>
                      <p><span>VS <router-link :to="{ name: 'Fighter', params: { id: f.Blue.toLowerCase().replaceAll(' ','_') } }">
                            {{ f.Blue }}
                          </router-link></span></p>
                      <p><span class="stats-fight-event">{{f.Date}} |
                         <router-link :to="{ name: 'Event', params: { id: f.ID } }">{{ f.Name }}</router-link></span></p>
                      </span>
                    </span>
                      <span>{{ f.Time }}</span>  
                  </div>

              </div>
            </article>



          <!--FASTEST KO/TKO -->
          <article class="results-group Fights-group">
              <header>
                <h3>FASTEST KO/TKO</h3>
                <p></p>
              </header>

          
              <div class="results-table">
                <div class="results-table--tr results-table--th">
                  <span>Rnk</span>
                  <span>Fighter</span>
                  <span>
                    <span>Total</span>
                  </span>
                </div>

                  <div v-for="(f, index) in fights[1]" :key="index" class="results-table--tr">
                    <span>{{ index + 1 }}</span>
                    <span>
                      <span><router-link :to="{ name: 'Fighter', params: { id: f.Red.toLowerCase().replaceAll(' ','_') } }">
                            {{ f.Red }}
                          </router-link>
                      <p><span>VS <router-link :to="{ name: 'Fighter', params: { id: f.Blue.toLowerCase().replaceAll(' ','_') } }">
                            {{ f.Blue }}
                          </router-link></span></p>
                      <p><span class="stats-fight-event">{{f.Date}} |<router-link :to="{ name: 'Event', params: { id: f.ID } }">
                            {{ f.Name }}
                          </router-link></span></p>                      
                      </span>
                    </span>
                      <span>{{ f.Time }}</span>  
                  </div>
              </div>
            </article>

            <!--Fastest Submission -->
            <article class="results-group Fights-group">
              <header>
                <h3>FASTEST SUBMISSION</h3>
                <p></p>
              </header>

              <div class="results-table">
                <div class="results-table--tr results-table--th">
                  <span>Rnk</span>
                  <span>Fighter</span>
                  <span>
                    <span>Total</span>
                  </span>
                </div>

                  <div v-for="(f, index) in fights[2]" :key="index" class="results-table--tr">
                    <span>{{ index + 1 }}</span>
                    <span>
                      <span><router-link :to="{ name: 'Fighter', params: { id: f.Red.toLowerCase().replaceAll(' ','_') } }">
                            {{ f.Red }}
                          </router-link>
                      <p><span>VS <router-link :to="{ name: 'Fighter', params: { id: f.Blue.toLowerCase().replaceAll(' ','_') } }">
                            {{ f.Blue }}
                          </router-link></span></p>
                      <p><span class="stats-fight-event">{{f.Date}} |<router-link :to="{ name: 'Event', params: { id: f.ID } }">
                            {{ f.Name }}
                          </router-link></span></p>
                      </span>
                    </span>
                      <span>{{ f.Time }}</span>  
                  </div>
              </div>
            </article>

          <!--Latest Finish-->

<article class="results-group Fights-group">
              <header>
                <h3>Latest Finish</h3>
                <p></p>
              </header>

              <div class="results-table">
                <div class="results-table--tr results-table--th">
                  <span>Rnk</span>
                  <span>Fighter</span>
                  <span>
                    <span>Total</span>
                  </span>
                </div>

                  <div v-for="(f, index) in fights[3]" :key="index" class="results-table--tr">
                    <span>{{ index + 1 }}</span>
                    <span>
                      <span><router-link :to="{ name: 'Fighter', params: { id: f.Red.toLowerCase().replaceAll(' ','_') } }">
                            {{ f.Red }}
                          </router-link>
                      <p><span>VS <router-link :to="{ name: 'Fighter', params: { id: f.Blue.toLowerCase().replaceAll(' ','_') } }">
                            {{ f.Blue }}
                          </router-link></span></p>
                      <p><span class="stats-fight-event">{{f.Date}} |<router-link :to="{ name: 'Event', params: { id: f.ID } }">
                            {{ f.Name }}
                          </router-link></span></p>
                      </span>
                    </span>
                      <span>{{ f.Time }}</span>  
                  </div>
              </div>
            </article>


        <!--Latest KO/TKO-->

        <article class="results-group Fights-group">
              <header>
                <h3>Latest KO/TKO</h3>
                <p></p>
              </header>

              <div class="results-table">
                <div class="results-table--tr results-table--th">
                  <span>Rnk</span>
                  <span>Fighter</span>
                  <span>
                    <span>Total</span>
                  </span>
                </div>

                  <div v-for="(f, index) in fights[4]" :key="index" class="results-table--tr">
                    <span>{{ index + 1 }}</span>
                    <span>
                      <span><router-link :to="{ name: 'Fighter', params: { id: f.Red.toLowerCase().replaceAll(' ','_') } }">
                            {{ f.Red }}
                          </router-link>
                      <p><span>VS <router-link :to="{ name: 'Fighter', params: { id: f.Blue.toLowerCase().replaceAll(' ','_') } }">
                            {{ f.Blue }}
                          </router-link></span></p>
                      <p><span class="stats-fight-event">{{f.Date}} | <router-link :to="{ name: 'Event', params: { id: f.ID } }">
                            {{ f.Name }}
                          </router-link></span></p>
                      </span>
                    </span>
                      <span>{{ f.Time }}</span>  
                  </div>
              </div>
            </article>

          
          <!--Latest Submission-->

           <article class="results-group Fights-group">
              <header>
                <h3>Latest Submission</h3>
                <p></p>
              </header>

              <div class="results-table">
                <div class="results-table--tr results-table--th">
                  <span>Rnk</span>
                  <span>Fighter</span>
                  <span>
                    <span>Total</span>
                  </span>
                </div>

                  <div v-for="(f, index) in fights[5]" :key="index" class="results-table--tr">
                    <span>{{ index + 1 }}</span>
                    <span>
                      <span><router-link :to="{ name: 'Fighter', params: { id: f.Red.toLowerCase().replaceAll(' ','_') } }">
                            {{ f.Red }}
                          </router-link>
                      <p><span>VS <router-link :to="{ name: 'Fighter', params: { id: f.Blue.toLowerCase().replaceAll(' ','_') } }">
                            {{ f.Blue }}
                          </router-link></span></p>
                      <p><span class="stats-fight-event">{{f.Date}} |<router-link :to="{ name: 'Event', params: { id: f.ID } }">
                            {{ f.Name }}
                          </router-link></span></p>
                      </span>
                    </span>
                      <span>{{ f.Time }}</span>  
                  </div>
              </div>
            </article>


          <!--Knockdowns Landed-->


          <article class="results-group Fights-group">
              <header>
                <h3>Knockdowns Landed</h3>
                <p></p>
              </header>

              <div class="results-table">
                <div class="results-table--tr results-table--th">
                  <span>Rnk</span>
                  <span>Fighter</span>
                  <span>
                    <span>Total</span>
                  </span>
                </div>

                  <div v-for="(f, index) in fights[6]" :key="index" class="results-table--tr">
                    <span>{{ index + 1 }}</span>
                    <span>
                      <span><router-link :to="{ name: 'Fighter', params: { id: f.Red.toLowerCase().replaceAll(' ','_') } }">
                            {{ f.Red }}
                          </router-link>
                      <p><span>VS <router-link :to="{ name: 'Fighter', params: { id: f.Blue.toLowerCase().replaceAll(' ','_') } }">
                            {{ f.Blue }}
                          </router-link></span></p>
                      <p><span class="stats-fight-event">{{f.Date}} |<router-link :to="{ name: 'Event', params: { id: f.ID } }">
                            {{ f.Name }}
                          </router-link></span></p>
                      </span>
                    </span>
                      <span>{{ f.Knockdows }}</span>  
                  </div>
              </div>
            </article>
          
          </div>

        </b-tab>
        <b-tab title="Event">

          <div class="results-content">
            
            <article class="results-group Fights-group">
              <header>
                <h3>KO/TKO WINS</h3>
                <p></p>
              </header>

              <div class="results-table">
                <div class="results-table--tr results-table--th">
                  <span>Rnk</span>
                  <span>Event</span>
                  <span>
                    <span>Total</span>
                  </span>
                </div>

               
                  <div v-for="(e, index) in events[0]" :key="index" class="results-table--tr">
                    <span>{{ index + 1 }}</span>
                    <span>
                      <router-link :to="{ name: 'Event', params: { id: e.ID } }">
                            {{ e.Name }}
                          </router-link>
                      <p style="font-size:13px;">{{e.Date}}</p>
                    </span>
                    <span>{{ e.Fights }}</span>
                  </div>

              </div>
            </article>


            <article class="results-group Fights-group">
              <header>
                <h3>SUBMISSION WINS</h3>
                <p></p>
              </header>

              <div class="results-table">
                <div class="results-table--tr results-table--th">
                  <span>Rnk</span>
                  <span>Event</span>
                  <span>
                    <span>Total</span>
                  </span>
                </div>

              <div v-for="(e, index) in events[1]" :key="index" class="results-table--tr">
                    <span>{{ index + 1 }}</span>
                    <span>
                      <router-link :to="{ name: 'Event', params: { id: e.ID } }">
                            {{ e.Name }}
                          </router-link>
                      <p style="font-size:13px;">{{e.Date}}</p>
                    </span>
                    <span>{{ e.Fights }}</span>
                  </div>
              </div>
            </article>


            <article class="results-group Fights-group">
              <header>
                <h3>DECISION WINS</h3>
                <p></p>
              </header>

              <div class="results-table">
                <div class="results-table--tr results-table--th">
                  <span>Rnk</span>
                  <span>Event</span>
                  <span>
                    <span>Total</span>
                  </span>
                </div>
               
                  <div v-for="(e, index) in events[2]" :key="index" class="results-table--tr">
                    <span>{{ index + 1 }}</span>
                    <span>
                      <router-link :to="{ name: 'Event', params: { id: e.ID } }">
                            {{ e.Name }}
                      </router-link>
                      <p style="font-size:13px;">{{e.Date}}</p>

                    </span>
                    <span>{{ e.Fights }}</span>
                  </div>
              </div>
            </article>

          </div>
        </b-tab>

        <!--LOCATION STATS  -->
        <b-tab title="Location">
    <div class="results-content">
            <article class="results-group Fights-group">
              <header>
                <h3>Total Fights</h3>
                <p></p>
              </header>

              <div class="results-table">
                <div class="results-table--tr results-table--th">
                  <span>Rnk</span>
                  <span>Location</span>
                  <span>
                    <span>Total</span>
                  </span>
                </div>

                  <div v-for="(l, index) in locations" :key="index" class="results-table--tr">
                    <span>{{ index + 1 }}</span>
                    <span>
                      {{ l.Country }},{{ l.City }},{{ l.State }}
          
                    </span>
                    <span>{{ l.Events }}</span>
                  </div>
              
              </div>
            </article>
          </div>
        </b-tab>

        <b-tab title="Referee">
   <div class="results-content">
            <article class="results-group Fights-group">
              <header>
                <h3>Total Fights</h3>
                <p></p>
              </header>

              <div class="results-table">
                <div class="results-table--tr results-table--th">
                  <span>Rnk</span>
                  <span>Referee</span>
                  <span>
                    <span>Total</span>
                  </span>
                </div>

              
                  <div v-for="(r, index) in referees" :key="index" class="results-table--tr">
                    <span>{{ index + 1 }}</span>
                    <span>
                      <a><u>{{ r.Name }}</u></a
                      >
                    </span>
                    <span>{{ r.Fights }}</span>
                  </div>
              
              </div>
            </article>

          </div>

        </b-tab>








             <b-tab title="Title Holders">
   <div class="results-content">
            <article class="results-group Fights-group">
              <header>
                <h3>Champions</h3>
                <p></p>
              </header>

              <div style="width:500px;"  class="results-table">
                <div  class="results-table--tr results-table--th">
                  <span>Weight</span>
                  <span>Fighter</span>
                  <span>
                    <span>Record</span>
                  </span>

                </div>

              
                  <div v-for="(c, index) in champions" :key="index" class="results-table--tr">
                    <span>{{ c.Weight }}</span>
                    <span>
                      <router-link :to="{ name: 'Fighter', params: { id: c.ID.toLowerCase().replaceAll(' ','_') } }">
                            
                            <u>{{ c.Name }}</u>
                          </router-link>
                    </span>
                    <span>{{ c.Wins}}-{{ c.Losses}}-{{ c.Draws}}</span>

                  </div>
              
              </div>
            </article>

          </div>

        </b-tab>
      </b-tabs>
    </div>
  </div>
</template>
 
<script>
import axios from "axios";

export default {
  metaInfo: {
    title: "UFC STATS",
  },
  data() {
    return {
      careers: [],
      fights: [],
      events: [],
      locations: [],
      referees: [],
      champions:[]
    };
  },

  created() {
    this.getCareerStats();
    this.getFightStats();
    this.getEventStats();
    this.getLocationStats();
    this.getRefereeStats();
    this.getTitleHolders();
  },

  methods: {
    getCareerStats: async function () {
      axios
        .all([
          axios.get("http://localhost:8079/ufc/stats/career/ufc-fights"),
          axios.get("http://localhost:8079/ufc/stats/career/mma-fights"),
          axios.get("http://localhost:8079/ufc/stats/career/wins"),
          axios.get("http://localhost:8079/ufc/stats/career/title-fight-wins"),
          axios.get("http://localhost:8079/ufc/stats/career/KO-TKO"),
          axios.get("http://localhost:8079/ufc/stats/career/submission-wins"),
          axios.get("http://localhost:8079/ufc/stats/career/finishes"),
          axios.get("http://localhost:8079/ufc/stats/career/decision"),
          axios.get("http://localhost:8079/ufc/stats/career/strike-accuracy"),
          axios.get("http://localhost:8079/ufc/stats/career/strikes-landed-per-min"),
          axios.get("http://localhost:8079/ufc/stats/career/strike-defense"),
          axios.get("http://localhost:8079/ufc/stats/career/takedown-accuracy"),
          axios.get("http://localhost:8079/ufc/stats/career/takedown-defense"),
          axios.get("http://localhost:8079/ufc/stats/career/submission-average"),
        ])
        .then(
          axios.spread((...responses) => {
            responses.forEach((r) => {
              this.careers.push(r.data);
            });
          })
        )
        .catch((e) => console.log("Error requesting the career stats :: " + e));
    },
  getFightStats: async function () {
      axios
        .all([
          axios.get("http://localhost:8079/ufc/stats/fight/fastest-finish"),
          axios.get("http://localhost:8079/ufc/stats/fight/fastest-KO-TKO"),
          axios.get("http://localhost:8079/ufc/stats/fight/fastest-submission"),
          axios.get("http://localhost:8079/ufc/stats/fight/latest-finish"),
          axios.get("http://localhost:8079/ufc/stats/fight/latest-KO-TKO"),
          axios.get("http://localhost:8079/ufc/stats/fight/latest-submission"),
          axios.get("http://localhost:8079/ufc/stats/fight/knockdows-landed")
        ])
        .then(
          axios.spread((...responses) => {
            responses.forEach((r) => {
              this.fights.push(r.data);
            });
          })
        )
        .catch((e) => console.log("Error requesting the fight stats :: " + e));
    },

      getEventStats: async function () {
      axios
        .all([
          axios.get("http://localhost:8079/ufc/stats/event/KO-TKO"),
          axios.get("http://localhost:8079/ufc/stats/event/submission-wins"),
          axios.get("http://localhost:8079/ufc/stats/event/decision-wins")
        ])
        .then(
          axios.spread((...responses) => {
            responses.forEach((r) => {
              this.events.push(r.data);
            });
          })
        )
        .catch((e) => console.log("Error requesting the fight stats :: " + e));
    },


  getLocationStats: async function () {
      axios.get("http://localhost:8079/ufc/stats/location")
          .then( res =>{
            this.locations=res.data
          })
          .catch(e=>{
            console.log("Error requesting the location stats :: "+ e);
          })
  },


getRefereeStats: async function () {
      axios.get("http://localhost:8079/ufc/stats/referee")
          .then( res =>{
            this.referees=res.data
          })
          .catch(e=>{
            console.log("Error requesting the referee stats :: "+ e);
          })
  },


getTitleHolders: async function () {
      axios.get("http://localhost:8079/ufc/stats/titleholders")
          .then( res =>{
            this.champions=res.data
          })
          .catch(e=>{
            console.log("Error requesting the ufc champions :: "+ e);
          })
  },


getImage: async function(fighterName){
      var image_name = fighterName.replaceAll(" ", "-") + ".png";
          try {
            var image =require("@/assets/Fighters/" + image_name);
            return image;

          } catch (e) {
            console.log("Fighter Dosen't have an image :: "+e)
            return ''
          }
    }
  },
};
</script>


<style scoped>
img {
  margin-left: 150px;
}

.Ranking-one {
  margin-top: 30px;
  margin-left: 60px;
  font-size: 45px;
}

.all-stats {
  width: 85%;
  margin: auto;
}

/*  UFC RESULTS CSS */

.results-content {
  display: inline-block !important;
  flex: 0 0 65% !important;
  padding: 0 0 0 6em !important;
  grid-column: 3 / 3 !important;
  grid-row: 3 / 3 !important;
  display: flex !important;
  flex-flow: row wrap !important;
  justify-content: space-between !important;
  align-items: flex-start !important;
  align-content: flex-start !important;
}

.results-group {
  margin: 1em 0 4em 0 !important;
  width: 45% !important;
  max-width: 25em !important;
}

.results-group header h3 {
  color: firebrick !important;
  font-size: 1.65em !important;
  font-weight: 700 !important;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif !important;
  letter-spacing: -0.025em !important;
  line-height: 1.1 !important;
  margin: 0 0 0.15em !important;
  padding: 0 !important ;
  text-transform: uppercase !important;
  text-align: center;
}

.results-table {
  font-size: 1em !important;
  line-height: 1.5 !important;
}

.results-table .results-table--th {
  background: lightgrey !important;
  font-size: 0.75em !important;
  font-weight: 700 !important;
  line-height: 1 !important;
  padding: 0.665em 1em !important;
  text-transform: uppercase !important;
}

.results-table .results-table--tr {
  box-sizing: border-box !important;
  border-bottom: solid 0.5px lightgrey !important;

  padding: 0.6em 0.75em !important;
  display: grid !important;
  grid-template-columns: 1.5fr 7fr 1.5fr !important;
  grid-template-rows: auto auto !important;
  column-gap: 0 !important;
  justify-items: stretch !important;
  align-items: start !important;
}

.results-table .results-table--row-1 {
  border-bottom: solid 0.5px lightgrey !important;
  color: firebrick !important;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif !important;
  font-weight: 700 !important;
  height: 12em !important;
  letter-spacing: -0.025em !important;
  line-height: 1 !important;
  overflow: hidden !important;
  padding: 1em 0.75em 0.75em !important;
  position: relative !important;
  text-transform: uppercase !important;
  display: flex !important;
  flex-flow: column !important;
  justify-content: flex-start !important;
  align-items: flex-start !important;
  display: grid !important;
  grid-template-columns: 1.5fr 8.5fr !important;
  grid-template-columns: 15% 85% !important;
  grid-template-rows: min-content !important;
  column-gap: 0 !important;
  row-gap: 0 !important;
}

* {
  box-sizing: border-box !important;
}


.stats-fight-event{
  font-size: 14px;
}

</style>