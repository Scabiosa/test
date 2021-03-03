<template>
    <div>
        <div class="companys_bg">
            <img src="../assets/companys/bg.png" width="100%">
        </div>
        <div class="company_placeholder"></div>
        <div class="companys_body">
            <div class="companys_search">
                <div class="companys_logo">
                    <div class="companys_logo_title">
                        <img src="../assets/companys/companys_logo.png" width="100%">
                        <div>JIANZHEN</div>
                        <div style="font-size: 20px;font-weight: bolder">企业信息</div>
                    </div>
                </div>
                <div>
                    <div class="companys_pagetitle">企业信息库</div>
                    <div class="companys_search_items">
                        <el-select
                                v-model="country_value"
                                clearable placeholder="未指定语言"
                                style="width: 130px"
                                @change="changeSearchLocale">
                            <el-option
                                    v-for="item in country_options"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                            </el-option>
                        </el-select>
                        <div style="width: 540px"></div>
                        <el-input
                                placeholder="请输入内容"
                                v-model="input"
                                class="input-with-select"
                                style="width: 300px;"
                                @keyup.enter.native="search">
                            <el-button slot="append" icon="el-icon-search" @click="search"></el-button>
                        </el-input>
                    </div>
                </div>
            </div>
            <div class="companys_content">
                <div style="width: 10%"></div>
                <el-tabs :tab-position="'left'">
                    <el-tab-pane label="搜索结果" >
                        <div class="companys_items">
                            <div class="companys_item" v-for="(item,index) in companys" :key=index v-show="index>= (currentPage-1)*pageSize && index<currentPage*pageSize">
                                <div class="companys_img">
                                    <img src="../assets/companys/1.png" width="100%">
                                </div>
                                <div class="companys_intro">
                                    <div style="font-size: 23px;font-weight: bolder;">{{item.name}}</div></br>
                                    <div style="font-size: 17px;">法定代表人：{{item.juridicalPerson}}</div>
                                    <div style="font-size: 17px;">邮箱：{{item.email}} </div>
                                    <div style="font-size: 17px;">地址：{{item.address}}</div>
                                </div>
                                <div class="companys_button">
                                    <el-button type="primary" plain>查看详情</el-button>
                                </div>
                            </div>
                        </div>
                        <div class="companys_pages">
                            <div style="position:relative; top:30%;">
                                <el-pagination
                                        :current-page.sync="currentPage"
                                        :page-size="pageSize"
                                        layout="total, prev, pager, next"
                                        :total="total">
                                </el-pagination>
                            </div>
                        </div>
                    </el-tab-pane>
                    <el-tab-pane label="地域分布">
                        <div class="company_graph">
                            <img src="../assets/companys/distribution.jpg" style="height: 100%;width: 100%">
                        </div>
                        <div style="height: 100px"></div>
                    </el-tab-pane>
                    <el-tab-pane label="知识图谱">
                        <div class="company_graph">
                            <img src="../assets/companys/knowledge_graph.png" style="height: 100%;width: 100%">
                        </div>
                        <div style="height: 100px"></div>
                    </el-tab-pane>
                </el-tabs>

            </div>
        </div>
        <InformationBaseFooter />
    </div>
</template>

<script>
    import InformationBaseHeader from "../components/layouts/InformationBase/InformationBaseHeader";
    import InformationBaseFooter from "../components/layouts/InformationBase/InformationBaseFooter";
    import axios from 'axios'
    export default {
        name: "companys",
        components:{
            InformationBaseHeader,
            InformationBaseFooter,
        },
        methods: {
            search: function() {
                var self = this;
                if (this.input == undefined)
                    this.input = ' ';
                fetch("/api/jz/company/list?name_LIKE=" + this.input + '&locale=' + this.locale_code[this.country_value] + '&pageNo=1&pageSize=999')
                    .then(res => {return res.json()}).then(res => {
                        self.total = res.result.total;
                        self.companys = res.result.records;
                    });
            },
            changeSearchLocale: function() {
                this.input = ''
                this.search();
            }
        },
        created: function() {
            this.search();
        },
        data: function () {
            /*
            fetch("jz/company/add",{
            method:'POST',
            body:JSON.stringify({company:{
               	"address": "中北3663",
                "capital": 3232434,
                "capitalUnit": "CNY",
                "clicks": 0,
                "code": "DORM1",
                "contactName": "第一宿舍",
                "contactPhone": "110110110",
                "contactTitle": "第一宿舍",
                "createBy": "0",
                "dateEstablishment": "2020-08-08 00:00:00",
                "email": "email@emain.com",
                "homepage": "hp",
                "introduction": "第一宿舍",
                "juridicalPerson": "宿管阿姨",
                "latitude": 0,
                "locale": "zh_CN",
                "longitude": 0,
                "managementStatus": "",
                "name": "第一宿舍",
                "personnelScale": 1,
                "productService": 1,
                "registeredCountry": 1,
                "telephones": "110110110110",
                "type": 1,
                "updateBy": "",
                "updateTime": "",
                "zipCode": "ZIP_1"
            }}),
            headers:{
                'Content-Type':'application/json'
            }});*/
            return {
                country_value: 1,
                country_options: [{
                    value: 1,
                    label: '汉语'
                }, {
                    value: 2,
                    label: '英语'
                },{
                    value: 3,
                    label: '日语'
                }],
                locale_code: ['','zh_CN','en_US','ja_JP'],
                currentPage: 1,
                input: this.$route.query.input,
                pageSize: 5,
                companys:null,
            }
        },

    }
</script>

<style>
    .layout{
        margin: 24px 0px 0px;
        height: 64px;
        padding: 0 12px 0 0;
    }

    .companys_bg{
        position: relative;
        height: 30vh;
    }

    .company_placeholder{
        width: 80%;
        background-color: rgba(255, 255, 255, 0.3);
        height: 13vh;
        margin: auto;
        position: relative;
        z-index: 8189;
    }

    .companys_body{
        background-color: rgb(236,245,255);
    }

    .companys_search{
        display: flex;
        flex-direction: row;
        margin: auto;
        width: 80%;
        background-color: #ffffff;
    }

    .companys_logo{
        width: 19%;
    }

    .companys_logo_title{
        text-align: right;
        margin-right: 20px;
        margin-bottom: 20px;
    }

    .companys_pagetitle{
        margin: 25px;
        border-left: solid;
        border-color: #40a9ff;
        border-left-width: 15px;
        font-size: 45px;
        font-weight: bolder;
        padding-left: 20px;
    }

    .companys_search_items{
        display: flex;
        flex-direction: row;
        margin: 20px;
    }

    .companys_content{
        width: 80%;
        margin: auto;
        display: flex;
        flex-direction: row;
        box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
        background-color: #ffffff;
        padding-top: 20px;
    }


    .el-tabs__item{
        font-size: 18px;
        height: 50px;
        line-height: 50px;
    }

    .companys_items{
        width: 980px;
        padding: 10px;
    }

    .companys_item{
        display: flex;
        flex-direction: row;
        height: 150px;
        border-top: 1px dashed #777777;
        padding: 10px;
    }

    .companys_img{
        height: 150px;
        line-height: 150px;
        padding: 10px;
        width: 15%;
    }


    .companys_intro{
        padding: 10px;
        width: 75%;
    }

    .companys_button{
        height: 150px;
        line-height: 150px;
        width: 10%;
    }

    .company_graph{
        width: 970px;
        height: 600px;
        padding: 10px;
    }

    .companys_pages{
        width: 100%;
        height: 15vh;
        line-height: 15vh;
        text-align: center;
    }

</style>
