import React, { useEffect } from 'react';
import { Dimensions, Image, StyleSheet, View } from "react-native";
import Animated, { useAnimatedStyle, useSharedValue, withRepeat, withSpring, withTiming } from "react-native-reanimated";

// const coin = "../svg/1/coin.png";
// const pin = "../svg/1/pin.png";
// const map = "../svg/1/map.png";
// const gifts = "../svg/1/gifts.png";
// const mike = "../svg/1/mike.png";
// const fire = "../svg/1/fire.png";
// const msg = "../svg/1/msg.png";
// const miniMike = "../svg/1/miniMike.png";
// const miniFire = "../svg/1/miniFire.png";
// const offerBox = "../svg/1/offerBox.png";
// const baloon1 = "../svg/1/baloon1.png";
// const baloon2 = "../svg/1/baloon2.png";
// const hourglass = "../svg/1/hourglass.png";
// const eye = "../svg/1/eye.png";
// const mobileLocate1 = "../svg/1/mobileLocate1.png";
// const mobileLocate2 = "../svg/1/mobileLocate2.png";
// const message1 = "../svg/1/message1.png";
// const message2 = "../svg/1/message2.png";
// const window = Dimensions.get('window');


// const AnimationScreen = () => {
//     const coinRotate = useSharedValue(0);

//     const pinOffset = useSharedValue(0);
//     const baloon1Offset = useSharedValue(1);
//     const baloon2Offset = useSharedValue(0);
//     const hourglassOffset = useSharedValue(0);
//     const mobileLocateOffset = useSharedValue(0);
//     const message1Offset = useSharedValue(0);
//     const message2Offset = useSharedValue(1);

//     const fireOffset = useSharedValue(0);
//     const fireTranslateX = useSharedValue(25);
//     const fireTranslateY = useSharedValue(-30);

//     const miniFireOffset = useSharedValue(0);
//     const miniFireTranslateX = useSharedValue(4);
//     const miniFireTranslateY = useSharedValue(-2);

//     const offerBoxOffset = useSharedValue(0.5);
//     const offerBoxTranslateX = useSharedValue(10);
//     const offerBoxTranslateY = useSharedValue(-20);

//     const eyesOffset = useSharedValue(0);

//     const fireStyle = useAnimatedStyle(() => {
//         return {
//             transform: [
//                 { scale: fireOffset.value },
//                 { translateX: fireTranslateX.value },
//                 { translateY: fireTranslateY.value },
//             ]
//         };
//     });
//     const miniFireStyle = useAnimatedStyle(() => {
//         return {
//             transform: [
//                 { scale: miniFireOffset.value },
//                 { translateX: miniFireTranslateX.value },
//                 { translateY: miniFireTranslateY.value },
//             ]
//         };
//     });
//     const offerBoxStyle = useAnimatedStyle(() => {
//         return {
//             transform: [
//                 { scale: offerBoxOffset.value },
//                 { translateX: offerBoxTranslateX.value },
//                 { translateY: offerBoxTranslateY.value },
//             ]
//         };
//     });
//     const eyesStyle = useAnimatedStyle(() => {
//         return {
//             transform: [
//                 { scale: eyesOffset.value },
//             ]
//         };
//     });
//     const coinStyle = useAnimatedStyle(() => {
//         return {
//             transform: [
//                 { rotateZ: `${coinRotate.value}deg` }
//             ],
//         }
//     })
//     const pinStyle = useAnimatedStyle(() => {
//         return {
//             transform: [{ translateY: withSpring(pinOffset.value * 75) }]
//         };
//     });
//     const giftsBaloon1Style = useAnimatedStyle(() => {
//         return {
//             transform: [{ translateY: withSpring(baloon1Offset.value * 30) }]
//         };
//     });
//     const giftsBaloon2Style = useAnimatedStyle(() => {
//         return {
//             transform: [{ translateY: withSpring(baloon2Offset.value * 30) }]
//         }
//     });
//     const hourglassStyle = useAnimatedStyle(() => {
//         return {
//             transform: [{ translateY: withSpring(hourglassOffset.value * 30) }]
//         }
//     });
//     const mobileLocateStyle = useAnimatedStyle(() => {
//         return {
//             transform: [{ translateY: withSpring(mobileLocateOffset.value * 55) }]
//         };
//     });

//     const message1Style = useAnimatedStyle(() => {
//         return {
//             transform: [{ translateY: withSpring(message1Offset.value * 55) }]
//         }
//     })
//     const message2Style = useAnimatedStyle(() => {
//         return {
//             transform: [{ translateY: withSpring(message2Offset.value * 70) }]
//         }
//     })
//     useEffect(() => {
//         fireOffset.value = withRepeat(
//             withTiming(1, { duration: 700 }),
//             0,
//             true
//         );
//         miniFireOffset.value = withRepeat(
//             withTiming(1, { duration: 700 }),
//             0,
//             true
//         );
//         offerBoxOffset.value = withRepeat(
//             withTiming(1, { duration: 600 }),
//             0,
//             true
//         );
//         eyesOffset.value = withRepeat(
//             withTiming(1, { duration: 800 }),
//             0,
//             true
//         );
//         coinRotate.value = withRepeat(
//             withTiming(5, { duration: 1000 }),
//             -1,
//             true,
//             () => {
//                 coinRotate.value = -coinRotate.value;
//             }
//         );
//         pinOffset.value = withRepeat(
//             withTiming(0.2, { duration: 800 }),
//             -1,
//             true
//         );
//         mobileLocateOffset.value = withRepeat(
//             withTiming(0.1, { duration: 800 }),
//             -1,
//             true
//         );
//         baloon1Offset.value = withRepeat(
//             withTiming(0.5, { duration: 1500 }),
//             0,
//             true
//         );
//         baloon2Offset.value = withRepeat(
//             withTiming(0.5, { duration: 1500 }),
//             -1,
//             true
//         );
//         hourglassOffset.value = withRepeat(
//             withTiming(0.5, { duration: 1500 }),
//             -1,
//             true
//         )
//         message1Offset.value = withRepeat(
//             withTiming(0.1, { duration: 800 }),
//             -1,
//             true
//         );
//         message2Offset.value = withRepeat(
//             withTiming(0.9, { duration: 800 }),
//             0,
//             true
//         );
//     }, []);


//     return (
//         <View style={styles.container}>
//             <View style={styles.topRowView}>
//                 <View>
//                     <Animated.Image
//                         source={require(fire)}
//                         style={[styles.fireImage, fireStyle]}
//                         resizeMode="contain"
//                     />
//                     <Image source={require(mike)}
//                         style={[styles.mikeImage]}
//                         resizeMode='contain' />
//                 </View>
//                 <Animated.Image
//                     source={require(coin)}
//                     style={[styles.coinImage, coinStyle]}
//                     resizeMode="contain"
//                 />
//             </View>
//             <View style={styles.middleView}>
//                 <Image source={require('../svg/1/lines.png')} style={styles.linesImage} resizeMode='contain' />
//                 <Animated.Image source={require(hourglass)} style={[styles.hourglassImage, hourglassStyle]} resizeMode='contain' />
//                 <View>
//                     <Image source={require('../svg/1/gadi.png')} style={styles.gadiImage} resizeMode='contain' />
//                     <Animated.Image source={require(eye)} resizeMode='contain' style={[styles.eyeImage1, eyesStyle]} />
//                     <Animated.Image source={require(eye)} resizeMode='contain' style={[styles.eyeImage2, eyesStyle]} />
//                 </View>
//                 <View style={{ bottom: 50 }}>
//                     <Image source={require('../svg/1/mobile.png')} style={styles.mobileImage} resizeMode='contain' />
//                     <Animated.Image source={require(mobileLocate1)} resizeMode='contain' style={[styles.mobileLocateImage1, mobileLocateStyle]} />
//                     <Animated.Image source={require(mobileLocate2)} resizeMode='contain' style={[styles.mobileLocateImage2, mobileLocateStyle]} />
//                 </View>
//                 <View>
//                     <Animated.Image source={require(message2)} resizeMode='contain' style={[styles.messageImage2, message2Style]} />
//                     <Animated.Image source={require(message1)} resizeMode='contain' style={[styles.messageImage1, message1Style]} />
//                 </View>
//             </View>
//             <View style={styles.bottomRowView}>
//                 <View style={{ marginTop: 20 }}>
//                     <Animated.Image
//                         source={require(pin)}
//                         style={[styles.pinImage, pinStyle]}
//                         resizeMode="contain"
//                     />
//                     <Image source={require(map)} style={styles.mapImage} resizeMode="contain" />
//                     <View style={{ position: 'relative', bottom: 90, left: 23 }}>
//                         <Image source={require(msg)} style={styles.msgImage} resizeMode="contain" />
//                         <Animated.Image
//                             source={require(miniFire)}
//                             style={[styles.miniFireImage, miniFireStyle]}
//                             resizeMode="contain"
//                         />
//                         <Image source={require(miniMike)} style={styles.miniMikeImage} resizeMode="contain" />
//                     </View>
//                     <Animated.Image
//                         source={require(offerBox)}
//                         style={[styles.offerBoxImage, offerBoxStyle]}
//                         resizeMode="contain"
//                     />
//                 </View>
//                 <View style={{ flexDirection: 'column' }}>
//                     <Image source={require(gifts)} style={styles.giftsImage} resizeMode="contain" />
//                     <View style={{ flexDirection: 'row' }}>
//                         <Animated.Image
//                             source={require(baloon1)}
//                             style={[styles.baloon1Image, giftsBaloon1Style]}
//                             resizeMode="contain"
//                         />
//                         <Animated.Image
//                             source={require(baloon2)}
//                             style={[styles.baloon2Image, giftsBaloon2Style]}
//                             resizeMode="contain"
//                         />
//                     </View>
//                 </View>
//             </View>
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
//     gifImage: {
//         width: 250,
//         height: 250,
//         zIndex: 0
//     },
//     topRowView: {
//         width: window.width,
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         paddingHorizontal: 40,
//         marginBottom: -35,
//     },
//     bottomRowView: {
//         width: window.width,
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         paddingHorizontal: 30,
//         marginTop: -50,
//     },
//     middleView: {
//         height: 200, position: 'relative'
//     },
//     coinImage: {
//         width: 150,
//         height: 150,
//     },
//     pinImage: {
//         width: 50,
//         height: 50,
//         zIndex: 1,
//         position: 'absolute',
//         left: 14,
//         top: -17
//     },
//     mapImage: {
//         width: 140,
//         height: 140,
//         zIndex: 0
//     },
//     giftsImage: {
//         width: 100,
//         height: 100,
//         zIndex: 3,
//         marginTop: 50,
//         marginBottom: -150
//     },
//     mikeImage: {
//         width: 120,
//         height: 120,
//         position: 'absolute'
//     },
//     fireImage: {
//         width: 110,
//         height: 110,
//         left: 18,
//         bottom: 0
//     },
//     msgImage: {
//         width: 46,
//         height: 46,
//     },
//     miniFireImage: {
//         width: 19,
//         height: 19,
//         bottom: 33,
//         left: 15
//     },
//     miniMikeImage: {
//         width: 20,
//         height: 20,
//         bottom: 48,
//         left: 12
//     },
//     offerBoxImage: {
//         height: 33,
//         width: 33,
//         bottom: 170,
//         left: 75
//     },
//     baloon1Image: {
//         width: 60,
//         height: 60,
//         position: 'absolute',
//         bottom: 12
//     },
//     baloon2Image: {
//         width: 60,
//         height: 60,
//         left: 18,
//         bottom: -3
//     },
//     locateImage: {
//         width: 100,
//         height: 100,
//         zIndex: 0,
//         position: 'relative'
//     },
//     hourglassImage: {
//         height: 65,
//         width: 65,
//         bottom: 180,
//         right: 10
//     },
//     mobileImage: {
//         height: 150,
//         bottom: 330,
//         left: 60,
//         zIndex: 1
//     },
//     linesImage: {
//         width: 180,
//         height: 180,
//         top: 30
//     },
//     gadiImage: {
//         width: 120,
//         height: 120,
//         bottom: 175,
//         left: 0
//     },
//     eyeImage1: {
//         width: 13,
//         height: 13,
//         bottom: 245,
//         left: 65
//     },
//     eyeImage2: {
//         width: 13,
//         height: 13,
//         bottom: 266,
//         left: 80
//     },
//     mobileLocateImage1: {
//         height: 20,
//         bottom: 426,
//         left: 165,
//         zIndex: 1
//     },
//     mobileLocateImage2: {
//         height: 15,
//         bottom: 414,
//         left: 150,
//         zIndex: 1
//     },
//     messageImage1: {
//         height: 50,
//         width: 50,
//         bottom: 590,
//         left: 100
//     },
//     messageImage2: {
//         height: 50,
//         width: 50,
//         bottom: 608,
//         left: 110
//     }
// });


// const window = Dimensions.get('window');
// const chart = require('../svg/2/chart.png')
// const sale = require('../svg/2/sale.png')
// const robot = require('../svg/2/robot.png')
// const shopping = require('../svg/2/shopping.png')
// const xmasSale = require('../svg/2/xmasSale.png')
// const AnimationScreen = () => {
//     const pinOffset = useSharedValue(0)
//     const pinStyle = useAnimatedStyle(() => {
//         return {
//             transform: [{ translateY: withSpring(pinOffset.value * 75) }]
//         };
//     });

//     useEffect(() => {
//         pinOffset.value = withRepeat(
//             withTiming(0.3, { duration: 800 }),
//             -1,
//             true
//         );
//     }, [])
//     return (
//         <View style={styles.container}>
//             <View style={styles.topRowView}>
//                 <Image
//                     source={chart}
//                     style={[styles.chartImage]}
//                     resizeMode="contain"
//                 />
//                 <Image
//                     source={sale}
//                     style={[styles.saleImage]}
//                     resizeMode="contain"
//                 />
//             </View>
//             <Animated.Image style={[styles.robotImage, pinStyle]} source={robot} resizeMode='contain' />
//             <View style={styles.bottomRowView}>
//                 <Image
//                     source={shopping}
//                     style={[styles.shoppingImage]}
//                     resizeMode="contain"
//                 />
//                 <Image
//                     source={xmasSale}
//                     style={[styles.xmasSaleImage]}
//                     resizeMode="contain"
//                 />
//             </View>
//         </View>
//     )
// }


// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//     },

//     topRowView: {
//         width: window.width,
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         paddingHorizontal: 30,
//         marginBottom: -600,
//     },
//     bottomRowView: {
//         width: window.width,
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         paddingHorizontal: 30,
//         // marginTop: -20
//     },
//     chartImage: {
//         width: 200,
//         height: 200,
//     },
//     saleImage: {
//         width: 150,
//         height: 150,
//     },
//     robotImage: {
//         width: "100%",
//         height: 210,
//         marginLeft: 40
//     },
//     shoppingImage: {
//         width: 150,
//         height: 150,
//     },
//     xmasSaleImage: {
//         width: 150,
//         height: 150,
//     },
// });

const wow = '../svg/3/wow.png'
const imageW = '../svg/3/imageW.png'
const imageO = '../svg/3/imageO.png'
const star1 = '../svg/3/star1.png'
const star2 = '../svg/3/star2.png'
const message = '../svg/3/message.png'
const plus = '../svg/3/plus.png'
const setting = '../svg/3/setting.png'
const grabitCoin = '../svg/3/grabitCoin.png'
const train = '../svg/3/train.png'
const join = '../svg/3/join.png'
const logo = '../svg/3/logo.png'
const hand = '../svg/3/hand.png'
const AnimationScreen = () => {
    const star1Offset = useSharedValue(0.5);
    const star2Offset = useSharedValue(1);
    const imageW1Offset = useSharedValue(0);
    const imageOOffset = useSharedValue(0);
    const imageW2Offset = useSharedValue(0);
    const joinOffset = useSharedValue(0);
    const messageOffset = useSharedValue(0);
    const plusOffset = useSharedValue(0);
    const logoOffset = useSharedValue(0.9);
    const handOffset = useSharedValue(0);

    const start1Style = useAnimatedStyle(() => {
        return {
            transform: [
                { scale: star1Offset.value },
            ]
        };
    });
    const start2Style = useAnimatedStyle(() => {
        return {
            transform: [
                { scale: star2Offset.value },
            ]
        };
    });
    const imageW1Style = useAnimatedStyle(() => {
        return {
            transform: [{ translateY: withSpring(imageW1Offset.value * 1600) }]
        };
    });
    const imageOStyle = useAnimatedStyle(() => {
        return {
            transform: [{ translateY: withSpring(imageOOffset.value * 1600) }]
        };
    });
    const imageW2Style = useAnimatedStyle(() => {
        return {
            transform: [{ translateY: withSpring(imageW2Offset.value * 1600) }]
        };
    });
    const joinStyle = useAnimatedStyle(() => {
        return {
            transform: [{ translateY: withSpring(joinOffset.value * 75) }]
        };
    });
    const messageStyle = useAnimatedStyle(() => {
        return {
            transform: [{ translateY: withSpring(messageOffset.value * 70) }]
        };
    });
    const plusStyle = useAnimatedStyle(() => {
        return {
            transform: [{ translateY: withSpring(plusOffset.value * 30) }]
        };
    });
    const logoStyle = useAnimatedStyle(() => {
        return {
            transform: [
                { scale: logoOffset.value },
            ]
        };
    });
    const handStyle = useAnimatedStyle(() => {
        return {
            transform: [
                { translateY: -10 },
                { rotate: `${handOffset.value}deg` },
                { translateY: -20 }
            ]
        };
    });
    useEffect(() => {
        star1Offset.value = withRepeat(
            withTiming(1, { duration: 800 }),
            0,
            true
        );
        star2Offset.value = withRepeat(
            withTiming(0.5, { duration: 800 }),
            0,
            true
        );
        imageW1Offset.value = withRepeat(
            withTiming(0.2, { duration: 800 }),
            1,
            false
        )

        setTimeout(() => {
            imageOOffset.value = withRepeat(
                withTiming(0.2, { duration: 800 }),
                1,
                false
            );
        }, 500)
        setTimeout(() => {
            imageW2Offset.value = withRepeat(
                withTiming(0.2, { duration: 800 }),
                1,
                false
            );
        }, 1000);

        joinOffset.value = withRepeat(
            withTiming(0.1, { duration: 1300 }),
            -1,
            true
        );
        messageOffset.value = withRepeat(
            withTiming(0.2, { duration: 1300 }),
            -1,
            true
        );
        plusOffset.value = withRepeat(
            withTiming(0.2, { duration: 1300 }),
            0,
            true
        );
        logoOffset.value = withRepeat(
            withTiming(1, { duration: 1000 }),
            0,
            true
        );
        handOffset.value = withRepeat(
            withTiming(10, { duration: 600 }, () => {
                return withTiming(-10, { duration: 1000 });
            }),
            -1,
            true
        );
    }, [])

    return (
        <View style={styles.container}>
            <View style={styles.wowSection}>
                <Image source={require(wow)} resizeMode='contain' style={styles.wowImage} />
                <Animated.Image source={require(star1)} resizeMode='contain' style={[styles.star1Image, start1Style]} />
                <Animated.Image source={require(imageW)} resizeMode='contain' style={[styles.imageW1, imageW1Style]} />
                <Animated.Image source={require(imageO)} resizeMode='contain' style={[styles.imageO, imageOStyle]} />
                <Animated.Image source={require(imageW)} resizeMode='contain' style={[styles.imageW2, imageW2Style]} />
                <Animated.Image source={require(star2)} resizeMode='contain' style={[styles.star2Image, start2Style]} />
            </View>
            <View>
                <Animated.Image source={require(message)} resizeMode='contain' style={[styles.messageImage, messageStyle]} />
                <Animated.Image source={require(plus)} resizeMode='contain' style={[styles.plusImage, plusStyle]} />
                <Animated.Image source={require(setting)} resizeMode='contain' style={styles.settingImage} />
            </View>
            <Image source={require(grabitCoin)} resizeMode='contain' style={styles.grabitCoinImage} />
            <Animated.Image source={require(hand)} resizeMode='contain' style={[styles.handImage, handStyle]} />
            <View style={styles.bottomView}>
                <Animated.View style={[{ bottom: 0, left: 40 }, joinStyle]}>
                    <Animated.Image source={require(star1)} resizeMode='contain' style={[styles.star3Image, start1Style]} />
                    <Image source={require(join)} resizeMode='contain' style={styles.joinImage} />
                    <Animated.Image source={require(star2)} resizeMode='contain' style={[styles.star4Image, start2Style]} />
                </Animated.View>
                <Animated.Image source={require(logo)} style={[styles.logoImage, logoStyle]} resizeMode='contain' />
                <Image source={require(train)} resizeMode='contain' style={styles.trainImage} />
            </View>
        </View>

    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative'
    },
    wowSection: {
        flexDirection: 'row'
    },
    wowImage: {
        height: 120,
        position: 'absolute',
        right: 70,
        top: 100
    },
    imageW1: {
        height: 40,
        bottom: 190,
        right: 20
    },
    imageO: {
        height: 35,
        bottom: 175,
        right: 92
    },
    imageW2: {
        height: 40,
        bottom: 165,
        right: 163
    },
    star1Image: {
        height: 23,
        top: 105,
        left: 40
    },
    star2Image: {
        height: 23,
        top: 195,
        right: 230,
    },
    messageImage: {
        height: 95,
        top: 220,
        right: 80
    },
    settingImage: {
        height: 80,
        left: 100,
        top: 140
    },
    plusImage: {
        height: 50,
        left: 130,
        top: 50
    },
    grabitCoinImage: {
        height: 145,
        top: 160,
        right: 70
    },
    trainImage: {
        height: 280,
        right: 80,
        bottom: 50
    },
    bottomView: {
        flexDirection: 'row'
    },
    joinImage: {
        height: 110,
        left: 430,
        bottom: 180
    },
    star3Image: {
        left: 482,
        bottom: 150,
        height: 22,
        zIndex: 1
    },
    star4Image: {
        left: 559,
        bottom: 204,
        height: 22
    },
    logoImage: {
        height: 60,
        left: 300,
        zIndex: 1,
        top: 5
    },
    handImage: {
        height: 25,
        right: 74,
        top: 64
    }
})
export default AnimationScreen;



// const star1Offset = useSharedValue(0.5);
// const star2Offset = useSharedValue(-1);

// const start1Style = useAnimatedStyle(() => {
//     return {
//         transform: [
//             { scale: star1Offset.value },
//         ]
//     };
// });
// const start2Style = useAnimatedStyle(() => {
//     return {
//         transform: [
//             { scale: star2Offset.value },
//         ]
//     };
// });
// useEffect(() => {
//     star1Offset.value = withRepeat(
//         withTiming(1, { duration: 800 }),
//         0,
//         true
//     );
//     star2Offset.value = withRepeat(
//         withTiming(0.5, { duration: 800 }),
//         0,
//         true
//     );
// }, [])
// return (
//     <View style={styles.container}>
//         <View style={styles.wowSection}>
//             <Image source={require(wow)} resizeMode='contain' style={styles.wowImage} />
//             <Animated.Image source={require(star1)} resizeMode='contain' style={[styles.star1Image, start1Style]} />
//             <Animated.Image source={require(imageW)} resizeMode='contain' style={styles.imageW1} />
//             <Animated.Image source={require(imageO)} resizeMode='contain' style={styles.imageO} />
//             <Animated.Image source={require(imageW)} resizeMode='contain' style={styles.imageW2} />
//             <Animated.Image source={require(star2)} resizeMode='contain' style={[styles.star2Image, start2Style]} />
//         </View>
//     </View>)

