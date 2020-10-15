<template>
  <div class="ol-editor">
    <script :id="id" class="editor-box" type="text/plain" style="height:300px"></script>
    <!-- <vue-neditor-wrap v-model="content" :config="config" @ready="ready"></vue-neditor-wrap> -->
    <!-- :destroy="false" -->
    <div :id="id"></div>
  </div>
</template>


<script>
// import VueNeditorWrap from "vue-neditor-wrap";
import url from "../../plugins/url";
import axios from "axios";

export default {
  name: "OlEditor",
  props: {
    value: {
      type: String,
      default: ""
    },
    height: {
      type: [String, Number],
      default: 500
    },
    toolbars: {
      type: Array,
      default() {
        return [
          [
            "undo",
            "redo",
            "bold",
            "indent",
            "snapscreen",
            "italic",
            "underline",
            "strikethrough",
            "subscript",
            "fontborder",
            "superscript",
            "formatmatch",
            "source",
            "blockquote",
            "pasteplain",
            "selectall",
            "print",
            "preview",
            "horizontal",
            "removeformat",
            "time",
            "date",
            "unlink",
            "insertrow",
            "insertcol",
            "mergeright",
            "mergedown",
            "deleterow",
            "deletecol",
            "splittorows",
            "splittocols",
            "splittocells",
            "deletecaption",
            "inserttitle",
            "mergecells",
            "deletetable",
            "cleardoc",
            "insertparagraphbeforetable",
            "insertcode",
            "fontfamily",
            "fontsize",
            "paragraph",

            "insertimage",
            "edittable",
            "edittd",

            "emotion",
            "spechars",
            "searchreplace",

            "justifyleft",
            "justifyright",
            "justifycenter",
            "justifyjustify",
            "forecolor",
            "backcolor",
            "insertorderedlist",
            "insertunorderedlist",
            "fullscreen",
            "directionalityltr",
            "directionalityrtl",
            "rowspacingtop",
            "rowspacingbottom",
            "pagebreak",

            "imagenone",
            "imageleft",
            "imageright",

            "imagecenter",
            "wordimage",
            "lineheight",
            "edittip ",
            "customstyle",
            "autotypeset",

            "touppercase",
            "tolowercase",
            "background",
            "template",
            "scrawl",
            "music",
            "inserttable",
            "drafts",
            "charts"
          ]
        ];
      }
    }
  },
  data() {
    return {
      editor: null,
      content: "",
      id: "script" + parseInt(Math.random() * 10000)
    };
  },
  methods: {
    // 用于初始化一些数据
    init() {},
    // 用于更新一些数据
    update() {},
    // getValue() {
    //   return this.summernote.summernote("code");
    // },
    // getContent() {
    //   return this.getValue();
    // },
    updateInput() {
      this.$emit("input", this.getContent());
    },
    getContent() {
      return this.editor.getContent();
    }
  },
  computed: {
    // summernote() {
    //   return $(`#${this.id}`);
    // }
  },
  watch: {
    value(v) {
      if (this.editor) {
        if (this.value != this.editor.getContent()) {
          this.editor.setContent(v);
        }
      }
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.editor = UE.getEditor(this.id, {
        BaseUrl: "",
        UEDITOR_HOME_URL: "/UE/",
        initialFrameWidth: "100%",
        initialFrameHeight: this.height,
        autoFloatEnabled: false,
        toolbars: this.toolbars
      });
      this.editor.addListener("ready", () => {
        this.editor.setContent(this.value);
        // this.editor.setHeight(1000);
      });
      this.editor.addListener("contentChange", () => {
        this.updateInput();
        // this.editor.setContent(this.value);
        // this.editor.setHeight(1000);
      });

      // this.summernote.summernote({
      //   height: 500,
      //   callbacks: {
      //     onChange: (contents, $editable) => {
      //       // console.log("onChange:", contents, $editable);
      //       this.content = contents;
      //       this.updateInput();
      //     },
      //     onImageUpload: files => {
      //       const file = files[0];
      //       let param = new FormData(); //创建form对象
      //       param.append("file", file); //通过append向form对象添加数据
      //       param.append("access_token", 1); //通过append向form对象添加数据
      //       param.append(
      //         "access_time",
      //         new Date().Format("yyyy-MM-dd hh:mm:ss")
      //       ); //通过append向form对象添加数据
      //       axios
      //         .post(
      //           "https://file.icaohejing.com/FileUpload/UploadImage",
      //           param,
      //           {
      //             // headers: { "Content-Type": "multipart/form-data" }
      //           }
      //         )
      //         .then(({ data }) => {
      //           console.warn(data.data);
      //           const image = new Image();
      //           image.src = data.data[0].ImageUrl;
      //           this.summernote.summernote("insertNode", image);
      //         });
      //       return true;
      //     }
      //   }
      // });
      // this.summernote.summernote("code", this.value);
    });
  },
  destroyed() {},
  components: {}
};
</script>


<style lang="scss" scoped>
@import "OlEditor.scss";
</style>