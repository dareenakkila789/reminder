import React, { Component } from "react";
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  Animbutton,
} from "react-native";
import Anime from "react-native-anime";
import Icon from "react-native-vector-icons/Ionicons";
// import Animbutton from "./animbutton";
const { width, height } = Dimensions.get("window");
let arrnew = [];
const jsonData = {
  quiz: {
    quiz1: {
      question1: {
        correctoption: "option3",
        options: {
          option1: "غامو",
          option2: "مورغان",
          option3: "مندل",
          option4: "ستريتفنت",
        },
        question: "واضع حجر الأساس لعلم الوراثة",
      },
      question2: {
        correctoption: "option4",
        options: {
          option1: "الجيل الثاني",
          option2: "الغاميتات",
          option3: "الأباء",
          option4: "الجيل الأول",
        },
        question: "يطلق على الأفراد الناتجة من التزاوج عند إجراء أول تلقيح",
      },
      question3: {
        correctoption: "option1",
        options: {
          option1: " السائدة",
          option2: " النقية",
          option3: "المتنحية ",
          option4: "غير النقية",
        },
        question: "الصفة القادرة على إخفاء أثر الصفة المقابلة لها",
      },
      question4: {
        correctoption: "option2",
        options: {
          option1: "التوزيع المستقل",
          option2: "انعزال الصفات",
          option3: "المرتبطة",
          option4: "السيادة غير التامة ",
        },
        question: "يسمى قانون مندل الأول",
      },
      question5: {
        correctoption: "option3",
        options: {
          option1: "العسلي",
          option2: "البني",
          option3: "الازرق",
          option4: " الأسود",
        },
        question: "جميع ما يلي عيون ملونة ماعدا",
      },
    },
  },
};
export default class Quiz extends Component {
  constructor(props) {
    super(props);
    this.qno = 0;
    this.score = 0;

    const jdata = jsonData.quiz.quiz1;
    arrnew = Object.keys(jdata).map(function (k) {
      return jdata[k];
    });
    this.state = {
      question: arrnew[this.qno].question,
      options: arrnew[this.qno].options,
      correctoption: arrnew[this.qno].correctoption,
      countCheck: 0,
    };
  }
  prev() {
    if (this.qno > 0) {
      this.qno--;
      this.setState({
        question: arrnew[this.qno].question,
        options: arrnew[this.qno].options,
        correctoption: arrnew[this.qno].correctoption,
      });
    }
  }
  next() {
    if (this.qno < arrnew.length - 1) {
      this.qno++;

      this.setState({
        countCheck: 0,
        question: arrnew[this.qno].question,
        options: arrnew[this.qno].options,
        correctoption: arrnew[this.qno].correctoption,
      });
    } else {
      this.props.quizFinish((this.score * 100) / 5);
    }
  }
  _answer(status, ans) {
    if (status == true) {
      const count = this.state.countCheck + 1;
      this.setState({ countCheck: count });
      if (ans == this.state.correctoption) {
        this.score += 1;
      }
    } else {
      const count = this.state.countCheck - 1;
      this.setState({ countCheck: count });
      if (this.state.countCheck < 1 || ans == this.state.correctoption) {
        this.score -= 1;
      }
    }
  }
  render() {
    let _this = this;
    const currentOptions = this.state.options;
    const options = Object.keys(currentOptions).map(function (k) {
      return (
        <View key={k} style={{ margin: 10 }}>
          <Animbutton
            countCheck={_this.state.countCheck}
            onColor={"green"}
            effect={"tada"}
            _onPress={(status) => _this._answer(status, k)}
            text={currentOptions[k]}
          />
        </View>
      );
    });

    return (
      <ScrollView style={{ backgroundColor: "#F5FCFF", paddingTop: 10 }}>
        <View style={styles.container}>
          <View
            style={{
              flex: 1,
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <View style={styles.oval}>
              <Text style={styles.welcome}>{this.state.question}</Text>
            </View>
            <View>{options}</View>
            <View style={{ flexDirection: "row" }}>
              {/*   <Button
          onPress={() => this.prev()}
          title="Prev"
          color="#841584"
        />
        <View style={{margin:15}} />*/}

              <TouchableOpacity onPress={() => this.next()}>
                <View
                  style={{
                    paddingTop: 5,
                    paddingBottom: 5,
                    paddingRight: 20,
                    paddingLeft: 20,
                    borderRadius: 10,
                    backgroundColor: "green",
                  }}
                >
                  <Icon name="md-arrow-round-forward" size={30} color="white" />
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  oval: {
    width: (width * 90) / 100,
    borderRadius: 20,
    backgroundColor: "green",
  },
  container: {
    flex: 1,
    alignItems: "center",
  },
  welcome: {
    fontSize: 20,
    margin: 15,
    color: "white",
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5,
  },
});
