import React, {Component} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
  Alert,
  AppState,
  RefreshControl,
} from 'react-native';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import Modal, {ModalContent, SlideAnimation} from 'react-native-modals';
import BottomModal from 'react-native-modals/dist/components/BottomModal';
import Header from '../components/Header';
import NotifController from '../../config/utils/NotifController';
import PushNotification from 'react-native-push-notification';
import moment from 'moment';
import 'moment/locale/id';

const data = [
  {
    id: 1,
    Penceramah: 'Ust Satu',
    tanggal: new Date('2020-02-27T06:52:27.940Z'),
  },
  {
    id: 2,
    Penceramah: 'Ust Dua',
    tanggal: new Date('2020-02-27T06:55:27.940Z'),
  },
  {
    id: 3,
    Penceramah: 'Ust Tiga',
    tanggal: new Date('2020-02-27T06:57:27.940Z'),
  },
  {
    id: 3,
    Penceramah: 'Ust Empat',
    tanggal: new Date('2020-02-27T07:05:27.940Z'),
  },
  {
    id: 4,
    Penceramah: 'Ust Lima',
    tanggal: new Date('2020-02-27T07:50:27.940Z'),
  },
  {
    id: 5,
    Penceramah: 'Ust Delapan',
    tanggal: new Date('2020-02-29T01:49:00.940Z'),
  },
  {
    id: 6,
    Penceramah: 'Ust Marzuki Ali ',
    tanggal: new Date('2020-03-05T01:50:00.940Z'),
  },
  {
    id: 7,
    Penceramah: 'Ust Zulkarnaen',
    tanggal: new Date('2020-03-05T01:55:00.940Z'),
  },
  {
    id: 8,
    Penceramah: 'Ust Tujuh',
    tanggal: new Date('2020-03-05T09:52:27.940Z'),
  },
];

export default class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      showingCalender: true,
      visible: false,
      namaPenceramah: '',
      hari: '',
      refreshing: false,
    };
  }

  _onRefresh = () => {
    this.setState({refreshing: true});
    this.data;
    this.setState({refreshing: false});
  };

  componentDidMount() {
    AppState.addEventListener('change', this.handleAppStateChange);
  }

  componentWillUnmount() {
    // AppState.removeEventListener('change', this.handleAppStateChange);
  }

  handleAppStateChange(appState) {
    if (appState === 'background') {
      console.log('tanggal skrg', new Date());
      console.log(appState);
      for (let i = 0; i < data.length; i++) {
        if (new Date() < data[i].tanggal) {
          return PushNotification.localNotificationSchedule({
            //... You can use all the options from localNotifications
            title: 'this title notification',
            message: data[i].Penceramah, // (required)
            date: data[i].tanggal, // in 60 secs
            soundName: 'roddyrich.mp3',
          });
        }
      }
    }
  }

  toggleCalender = () => {
    const {showingCalender} = this.state;
    this.setState({
      showingCalender: !showingCalender,
    });
  };
  render() {
    console.log('new date', new Date());

    const {showingCalender, namaPenceramah, hari} = this.state;
    let calenderIcon = showingCalender
      ? require('../assets/icons/calenderActive.png')
      : require('../assets/icons/calender.png');
    const NoData = props => {
      return (
        <TouchableOpacity
          style={{
            width: '100%',
            paddingBottom: 10,
            justifyContent: 'center',
          }}>
          <View
            style={{
              paddingVertical: 10,
              backgroundColor: 'white',
              marginLeft: 20,
              marginRight: 20,
              justifyContent: 'center',
              borderRadius: 10,
              borderColor: '#0BA1D9',
              borderWidth: 2,
            }}>
            <View style={{flex: 1}}>
              <Text style={{marginLeft: 20, color: '#0BA1D9'}}>
                {props.title}
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      );
    };
    const listDataUpcoming = data.map((item, index) => {
      if (new Date() < item.tanggal) {
        return (
          <TouchableOpacity
            onPress={() =>
              this.setState({
                visible: true,
                namaPenceramah: item.Penceramah,
                hari: moment(item.tanggal).format('D-MM-YYYY/ h : mm'),
              })
            }
            style={{
              width: '100%',
              paddingBottom: 10,
              justifyContent: 'center',
            }}
            key={index}>
            <View
              style={{
                paddingVertical: 10,
                backgroundColor: 'white',
                marginLeft: 20,
                marginRight: 20,
                justifyContent: 'center',
                borderRadius: 10,
                borderColor: '#0BA1D9',
                borderWidth: 2,
              }}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <View
                  onPress={this.toggleCalender}
                  style={{
                    height: 40,
                    width: 40,

                    marginLeft: 10,
                    padding: 5,
                  }}>
                  <Image
                    style={{
                      height: undefined,
                      width: undefined,
                      resizeMode: 'contain',
                      flex: 1,
                    }}
                    source={require('../assets/icons/bellActive.png')}
                  />
                </View>
                <View style={{flex: 1}}>
                  <Text style={{marginLeft: 20, color: '#0BA1D9'}}>
                    Nama Penceramah : {item.Penceramah}
                  </Text>
                  <Text style={{marginLeft: 20, color: '#0BA1D9'}}>
                    Upcoming :
                  </Text>
                  <Text style={{marginLeft: 20, color: '#0BA1D9'}}>
                    Hari/ Tanggal :{' '}
                    {moment(item.tanggal).format('D-MM-YYYY/ h : mm a')}
                  </Text>
                  <Text
                    style={{
                      alignSelf: 'flex-end',
                      marginRight: 20,
                      backgroundColor: '#EBFBFF',
                      color: 'grey',
                    }}>
                    {moment(item.tanggal, 'YYYYMMDD').fromNow()}
                    {/* {moment(item.tanggal).format('D-MM-YYYY/ h : mm')} */}
                  </Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        );
      }
    });
    const listDataHistory = data.map((item, index) => {
      if (new Date() > item.tanggal) {
        return (
          <TouchableOpacity
            onPress={() =>
              this.setState({
                visible: true,
                namaPenceramah: item.Penceramah,
                hari: moment(item.tanggal).format('D-MM-YYYY/ h : mm'),
              })
            }
            style={{
              width: '100%',
              paddingBottom: 10,
              justifyContent: 'center',
            }}
            key={index}>
            <View
              style={{
                paddingVertical: 10,
                backgroundColor: 'white',
                marginLeft: 20,
                marginRight: 20,
                justifyContent: 'center',
                borderRadius: 10,
                borderColor: '#d1d1d1',
                borderWidth: 1,
              }}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <View
                  onPress={this.toggleCalender}
                  style={{
                    height: 40,
                    width: 40,

                    marginLeft: 10,
                    padding: 5,
                  }}>
                  <Image
                    style={{
                      height: undefined,
                      width: undefined,
                      resizeMode: 'contain',
                      flex: 1,
                    }}
                    source={require('../assets/icons/bellSilent.png')}
                  />
                </View>
                <View style={{flex: 1}}>
                  <Text style={{marginLeft: 20, color: 'grey'}}>
                    Nama Penceramah : {item.Penceramah}
                  </Text>
                  <Text style={{marginLeft: 20, color: 'grey'}}>History :</Text>
                  <Text style={{marginLeft: 20, color: 'grey'}}>
                    Hari/ Tanggal :{' '}
                    {moment(item.tanggal).format('D-MM-YYYY/ h : mm a')}
                  </Text>
                  <Text
                    style={{
                      alignSelf: 'flex-end',
                      marginRight: 20,
                      backgroundColor: '#FCFAE5',
                      color: 'grey',
                    }}>
                    {moment(item.tanggal, 'YYYYMMDD').fromNow()}
                    {/* {moment(item.tanggal).format('D-MM-YYYY/ h : mm')} */}
                  </Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        );
      }
    });

    return (
      <View style={{flex: 1}}>
        {/* Header */}

        <Header
          onPressBars={() => this.props.navigation.openDrawer()}
          titleApp="Aplikasi Pengingat"
          onPressCalender={this.toggleCalender}
          imageCalender={calenderIcon}
        />

        {/* batas Header */}
        <ScrollView
          refreshControl={
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={this._onRefresh}
            />
          }>
          {showingCalender && (
            <View>
              <View
                style={{
                  width: '100%',
                }}>
                <Calendar />
              </View>
              <View
                style={{
                  height: 1,
                  width: '90%',
                  backgroundColor: '#d1d1d1',
                  marginVertical: 20,
                  alignSelf: 'center',
                }}
              />
            </View>
          )}
          <View
            style={{
              paddingVertical: 10,
              backgroundColor: '#0BA1D9',
              margin: 20,
              borderRadius: 5,
            }}>
            <Text
              style={{alignSelf: 'center', color: 'white', fontWeight: 'bold'}}>
              JADWAL PUASA RAMADHAN
            </Text>
          </View>
          <Text style={{textAlign: 'center', marginBottom: 10}}>
            Pengingat yang akan Datang
          </Text>
          {listDataUpcoming}

          <Text style={{textAlign: 'center', marginBottom: 10, marginTop: 20}}>
            Riwayat Pengingat
          </Text>
          {listDataHistory}
        </ScrollView>

        <BottomModal
          visible={this.state.visible}
          onSwipeOut={event => {
            this.setState({visible: false});
          }}
          onTouchOutside={() => {
            this.setState({visible: false});
          }}
          modalAnimation={
            new SlideAnimation({
              slideFrom: 'bottom',
            })
          }>
          <ModalContent>
            <View style={{height: 200}}>
              <Text style={{textAlign: 'center', marginBottom: 10}}>
                Detail
              </Text>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text>Nama Penceramah :</Text>
                <Text>{namaPenceramah}</Text>
              </View>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text>Hari/ Tanggal :</Text>
                <Text>{hari}</Text>
              </View>
            </View>
          </ModalContent>
        </BottomModal>
        <NotifController />
      </View>
    );
  }
}
