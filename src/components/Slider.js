import Slider from "react-slick";
import React from 'react';
import { browserHistory } from 'react-router-dom';

const ImgObj = {
    violin_1972: [
        require('../images/index-hover/1972-violin/evgeniy-pavlov-violin-1972-01.jpg'),

        require('../images/index-hover/1972-violin/evgeniy-pavlov-violin-1972-01.jpg'),
        require('../images/index-hover/1972-violin/evgeniy-pavlov-violin-1972-02.jpg'),
        require('../images/index-hover/1972-violin/evgeniy-pavlov-violin-1972-03.jpg'),
        require('../images/index-hover/1972-violin/evgeniy-pavlov-violin-1972-04.jpg'),
    ],
    orvochrome_1974_1985: [
        require('../images/index-hover/1974-1985-orwochrom/evgeniy-pavlov-orwochrom-01-1976.jpg'),

        require('../images/index-hover/1974-1985-orwochrom/evgeniy-pavlov-orwochrom-01-1976.jpg'),
        require('../images/index-hover/1974-1985-orwochrom/evgeniy-pavlov-orwochrom-02-1974.jpg'),
        require('../images/index-hover/1974-1985-orwochrom/evgeniy-pavlov-orwochrom-03-1983.jpg'),
        require('../images/index-hover/1974-1985-orwochrom/evgeniy-pavlov-orwochrom-04-1984.jpg'),
        require('../images/index-hover/1974-1985-orwochrom/evgeniy-pavlov-orwochrom-05-1985.jpg'),
        require('../images/index-hover/1974-1985-orwochrom/evgeniy-pavlov-orwochrom-06-1986.jpg'),
        require('../images/index-hover/1974-1985-orwochrom/evgeniy-pavlov-orwochrom-06-1986.jpg'),
        require('../images/index-hover/1974-1985-orwochrom/evgeniy-pavlov-orwochrom-07-1985.jpg'),
        require('../images/index-hover/1974-1985-orwochrom/evgeniy-pavlov-orwochrom-08-1983.jpg'),
        require('../images/index-hover/1974-1985-orwochrom/evgeniy-pavlov-orwochrom-09-1984.jpg'),
        require('../images/index-hover/1974-1985-orwochrom/evgeniy-pavlov-orwochrom-10-1986.jpg'),
        require('../images/index-hover/1974-1985-orwochrom/evgeniy-pavlov-orwochrom-11-1976.jpg'),
        require('../images/index-hover/1974-1985-orwochrom/evgeniy-pavlov-orwochrom-12-1974.jpg'),
        require('../images/index-hover/1974-1985-orwochrom/evgeniy-pavlov-orwochrom-13-1983.jpg'),
        require('../images/index-hover/1974-1985-orwochrom/evgeniy-pavlov-orwochrom-14-1976.jpg'),
        require('../images/index-hover/1974-1985-orwochrom/evgeniy-pavlov-orwochrom-15-1976.jpg'),
        require('../images/index-hover/1974-1985-orwochrom/evgeniy-pavlov-orwochrom-16-1985.jpg'),
        require('../images/index-hover/1974-1985-orwochrom/evgeniy-pavlov-orwochrom-17-1976.jpg'),
        require('../images/index-hover/1974-1985-orwochrom/evgeniy-pavlov-orwochrom-18-1976.jpg'),
        require('../images/index-hover/1974-1985-orwochrom/evgeniy-pavlov-orwochrom-19-1976.jpg'),
        require('../images/index-hover/1974-1985-orwochrom/evgeniy-pavlov-orwochrom-20-1976.jpg'),
        require('../images/index-hover/1974-1985-orwochrom/evgeniy-pavlov-orwochrom-21-1983.jpg'),
        require('../images/index-hover/1974-1985-orwochrom/evgeniy-pavlov-orwochrom-22-1976.jpg'),
        require('../images/index-hover/1974-1985-orwochrom/evgeniy-pavlov-orwochrom-23-1984.jpg'),
    ],
    additions_1974_1989: [
        require('../images/index-hover/1974-1989-additions/evgeniy-pavlov-additions-01-1974.jpg'),

        require('../images/index-hover/1974-1989-additions/evgeniy-pavlov-additions-01-1974.jpg'),
        require('../images/index-hover/1974-1989-additions/evgeniy-pavlov-additions-02-1974.jpg'),
        require('../images/index-hover/1974-1989-additions/evgeniy-pavlov-additions-03-1975.jpg'),
        require('../images/index-hover/1974-1989-additions/evgeniy-pavlov-additions-04-1975.jpg'),
        require('../images/index-hover/1974-1989-additions/evgeniy-pavlov-additions-05-1975.jpg'),
        require('../images/index-hover/1974-1989-additions/evgeniy-pavlov-additions-06-1976.jpg'),
        require('../images/index-hover/1974-1989-additions/evgeniy-pavlov-additions-07-1977.jpg'),
        require('../images/index-hover/1974-1989-additions/evgeniy-pavlov-additions-08-1982.jpg'),
        require('../images/index-hover/1974-1989-additions/evgeniy-pavlov-additions-09-1983.jpg'),
        require('../images/index-hover/1974-1989-additions/evgeniy-pavlov-additions-10-1984.jpg'),
        require('../images/index-hover/1974-1989-additions/evgeniy-pavlov-additions-11-1984.jpg'),
        require('../images/index-hover/1974-1989-additions/evgeniy-pavlov-additions-12-1984.jpg'),
        require('../images/index-hover/1974-1989-additions/evgeniy-pavlov-additions-13-1985.jpg'),
        require('../images/index-hover/1974-1989-additions/evgeniy-pavlov-additions-14-1985.jpg'),
        require('../images/index-hover/1974-1989-additions/evgeniy-pavlov-additions-15-1986.jpg'),
        require('../images/index-hover/1974-1989-additions/evgeniy-pavlov-additions-16-1986.jpg')
    ],
    documental_photography_1977: [
        require('../images/index-hover/1977-documental-photography/evgeniy-pavlov-documental-photography-01-1969.jpg'),

        require('../images/index-hover/1977-documental-photography/evgeniy-pavlov-documental-photography-01-1969.jpg'),
        require('../images/index-hover/1977-documental-photography/evgeniy-pavlov-documental-photography-02-1974.jpg'),
        require('../images/index-hover/1977-documental-photography/evgeniy-pavlov-documental-photography-03-1975.jpg'),
        require('../images/index-hover/1977-documental-photography/evgeniy-pavlov-documental-photography-04-1975.jpg'),
        require('../images/index-hover/1977-documental-photography/evgeniy-pavlov-documental-photography-05-1982.jpg'),
        require('../images/index-hover/1977-documental-photography/evgeniy-pavlov-documental-photography-06-1983.jpg'),
        require('../images/index-hover/1977-documental-photography/evgeniy-pavlov-documental-photography-07-1983.jpg'),
        require('../images/index-hover/1977-documental-photography/evgeniy-pavlov-documental-photography-08-1984.jpg'),
        require('../images/index-hover/1977-documental-photography/evgeniy-pavlov-documental-photography-09-1985.jpg'),
        require('../images/index-hover/1977-documental-photography/evgeniy-pavlov-documental-photography-10-1985.jpg'),
        require('../images/index-hover/1977-documental-photography/evgeniy-pavlov-documental-photography-11-1985.jpg'),
        require('../images/index-hover/1977-documental-photography/evgeniy-pavlov-documental-photography-12-1985.jpg'),
        require('../images/index-hover/1977-documental-photography/evgeniy-pavlov-documental-photography-13-1986.jpg'),
        require('../images/index-hover/1977-documental-photography/evgeniy-pavlov-documental-photography-14-1986.jpg'),
        require('../images/index-hover/1977-documental-photography/evgeniy-pavlov-documental-photography-15-1986.jpg'),
        require('../images/index-hover/1977-documental-photography/evgeniy-pavlov-documental-photography-16-1986.jpg'),
        require('../images/index-hover/1977-documental-photography/evgeniy-pavlov-documental-photography-17-1987.jpg'),
        require('../images/index-hover/1977-documental-photography/evgeniy-pavlov-documental-photography-19-1987.jpg'),
        require('../images/index-hover/1977-documental-photography/evgeniy-pavlov-documental-photography-20-1987.jpg'),
        require('../images/index-hover/1977-documental-photography/evgeniy-pavlov-documental-photography-21-1988.jpg'),
        require('../images/index-hover/1977-documental-photography/evgeniy-pavlov-documental-photography-22-1988.jpg'),
        require('../images/index-hover/1977-documental-photography/evgeniy-pavlov-documental-photography-23-1989.jpg'),
        require('../images/index-hover/1977-documental-photography/evgeniy-pavlov-documental-photography-24-1989.jpg'),
        require('../images/index-hover/1977-documental-photography/evgeniy-pavlov-documental-photography-25-1989.jpg'),
        require('../images/index-hover/1977-documental-photography/evgeniy-pavlov-documental-photography-26-1990.jpg'),
        require('../images/index-hover/1977-documental-photography/evgeniy-pavlov-documental-photography-27-1990.jpg')
    ],
    love_1976: [
        require('../images/index-hover/1976-love/evgeniy-pavlov-love-1976-01.jpg'),

        require('../images/index-hover/1976-love/evgeniy-pavlov-love-1976-01.jpg'),
        require('../images/index-hover/1976-love/evgeniy-pavlov-love-1976-02.jpg'),
        require('../images/index-hover/1976-love/evgeniy-pavlov-love-1976-03.jpg'),
        require('../images/index-hover/1976-love/evgeniy-pavlov-love-1976-04.jpg'),
        require('../images/index-hover/1976-love/evgeniy-pavlov-love-1976-05.jpg'),
        require('../images/index-hover/1976-love/evgeniy-pavlov-love-1976-06.jpg'),
    ],
    alcohol_psychosis_1983: [
        require('../images/index-hover/1983-alcohol-psychosis/evgeniy-pavlov-alcohol-psychosis-1983-01.jpg'),

        require('../images/index-hover/1983-alcohol-psychosis/evgeniy-pavlov-alcohol-psychosis-1983-01.jpg'),
        require('../images/index-hover/1983-alcohol-psychosis/evgeniy-pavlov-alcohol-psychosis-1983-02.jpg'),
        require('../images/index-hover/1983-alcohol-psychosis/evgeniy-pavlov-alcohol-psychosis-1983-03.jpg'),
        require('../images/index-hover/1983-alcohol-psychosis/evgeniy-pavlov-alcohol-psychosis-1983-04.jpg'),
        require('../images/index-hover/1983-alcohol-psychosis/evgeniy-pavlov-alcohol-psychosis-1983-05.jpg'),
    ],
    montages_1984: [
        require('../images/index-hover/1984-montages/evgeniy-pavlov-montages-1974-01.jpg'),

        require('../images/index-hover/1984-montages/evgeniy-pavlov-montages-1974-01.jpg'),
        require('../images/index-hover/1984-montages/evgeniy-pavlov-montages-1974-02.jpg'),
        require('../images/index-hover/1984-montages/evgeniy-pavlov-montages-1984-03.jpg'),
        require('../images/index-hover/1984-montages/evgeniy-pavlov-montages-1984-04.jpg'),
        require('../images/index-hover/1984-montages/evgeniy-pavlov-montages-1985-05.jpg'),
        require('../images/index-hover/1984-montages/evgeniy-pavlov-montages-1986-06.jpg'),
        require('../images/index-hover/1984-montages/evgeniy-pavlov-montages-1987-07.jpg'),
        require('../images/index-hover/1984-montages/evgeniy-pavlov-montages-1991-09.jpg'),
        require('../images/index-hover/1984-montages/evgeniy-pavlov-montages-1991-10.jpg'),
        require('../images/index-hover/1984-montages/evgeniy-pavlov-montages-1991-11.jpg'),
        require('../images/index-hover/1984-montages/evgeniy-pavlov-montages-1992-12.jpg'),
        require('../images/index-hover/1984-montages/evgeniy-pavlov-montages-1992-13.jpg'),
        require('../images/index-hover/1984-montages/evgeniy-pavlov-montages-1991-21.jpg'),
        require('../images/index-hover/1984-montages/evgeniy-pavlov-montages-1994-14.jpg'),
        require('../images/index-hover/1984-montages/evgeniy-pavlov-montages-1994-15.jpg'),
        require('../images/index-hover/1984-montages/evgeniy-pavlov-montages-1995-16.jpg'),
        require('../images/index-hover/1984-montages/evgeniy-pavlov-montages-1996-17.jpg'),
        require('../images/index-hover/1984-montages/evgeniy-pavlov-montages-1996-18.jpg'),
        require('../images/index-hover/1984-montages/evgeniy-pavlov-montages-1996-19.jpg'),
        require('../images/index-hover/1984-montages/evgeniy-pavlov-montages-1997-20.jpg')
    ],
    IxSeven_1987: [
        require('../images/index-hover/1987-1x7//evgeniy-pavlov-1x7-1987-01.jpg'),

        require('../images/index-hover/1987-1x7//evgeniy-pavlov-1x7-1987-01.jpg'),
        require('../images/index-hover/1987-1x7/evgeniy-pavlov-1x7-1987-02.jpg'),
        require('../images/index-hover/1987-1x7/evgeniy-pavlov-1x7-1987-03.jpg'),
    ],
    blatari_vospoda_1989: [
        require('../images/index-hover/1989-blatari-wospoda/evgeniy-pavlov-blatari-vospoda-1989-01.jpg'),

        require('../images/index-hover/1989-blatari-wospoda/evgeniy-pavlov-blatari-vospoda-1989-01.jpg'),
        require('../images/index-hover/1989-blatari-wospoda/evgeniy-pavlov-blatari-vospoda-1989-02.jpg'),
        require('../images/index-hover/1989-blatari-wospoda/evgeniy-pavlov-blatari-vospoda-1989-03.jpg'),
    ],
    eclipse_1989: [
        require('../images/index-hover/1989-eclipse/evgeniy-pavlov-eclipse-1989-01.jpg'),

        require('../images/index-hover/1989-eclipse/evgeniy-pavlov-eclipse-1989-01.jpg'),
        require('../images/index-hover/1989-eclipse/evgeniy-pavlov-eclipse-1989-02.jpg'),
        require('../images/index-hover/1989-eclipse/evgeniy-pavlov-eclipse-1989-03.jpg'),
        require('../images/index-hover/1989-eclipse/evgeniy-pavlov-eclipse-1989-04.jpg'),
        require('../images/index-hover/1989-eclipse/evgeniy-pavlov-eclipse-1989-05.jpg'),
        require('../images/index-hover/1989-eclipse/evgeniy-pavlov-eclipse-1989-06.jpg'),
        require('../images/index-hover/1989-eclipse/evgeniy-pavlov-eclipse-1989-07.jpg')
    ],
    energetic_portraits_1989: [
        require('../images/index-hover/1989-energetic-portraits/evgeniy-pavlov-energetic-portraits-1989-01.jpg'),

        require('../images/index-hover/1989-energetic-portraits/evgeniy-pavlov-energetic-portraits-1989-01.jpg'),
        require('../images/index-hover/1989-energetic-portraits/evgeniy-pavlov-energetic-portraits-1989-02.jpg'),
        require('../images/index-hover/1989-energetic-portraits/evgeniy-pavlov-energetic-portraits-1989-03.jpg'),
        require('../images/index-hover/1989-energetic-portraits/evgeniy-pavlov-energetic-portraits-1989-04.jpg'),
        require('../images/index-hover/1989-energetic-portraits/evgeniy-pavlov-energetic-portraits-1989-05.jpg'),
        require('../images/index-hover/1989-energetic-portraits/evgeniy-pavlov-energetic-portraits-1989-06.jpg'),
    ],
    total_photography_1990_1994: [
        require('../images/index-hover/1990-1994-total-photography/evgeniy-pavlov-total-photography-01-1990-1994.jpg'),

        require('../images/index-hover/1990-1994-total-photography/evgeniy-pavlov-total-photography-01-1990-1994.jpg'),
        require('../images/index-hover/1990-1994-total-photography/evgeniy-pavlov-total-photography-02-1990-1994.jpg'),
        require('../images/index-hover/1990-1994-total-photography/evgeniy-pavlov-total-photography-03-1990-1994.jpg'),
        require('../images/index-hover/1990-1994-total-photography/evgeniy-pavlov-total-photography-04-1990-1994.jpg'),
        require('../images/index-hover/1990-1994-total-photography/evgeniy-pavlov-total-photography-05-1990-1994.jpg'),
        require('../images/index-hover/1990-1994-total-photography/evgeniy-pavlov-total-photography-06-1990-1994.jpg'),
        require('../images/index-hover/1990-1994-total-photography/evgeniy-pavlov-total-photography-07-1990-1994.jpg'),
        require('../images/index-hover/1990-1994-total-photography/evgeniy-pavlov-total-photography-08-1990-1994.jpg'),
        require('../images/index-hover/1990-1994-total-photography/evgeniy-pavlov-total-photography-09-1990-1994.jpg'),
        require('../images/index-hover/1990-1994-total-photography/evgeniy-pavlov-total-photography-10-1990-1994.jpg'),
        require('../images/index-hover/1990-1994-total-photography/evgeniy-pavlov-total-photography-11-1990-1994.jpg'),
        require('../images/index-hover/1990-1994-total-photography/evgeniy-pavlov-total-photography-12-1990-1994.jpg'),
        require('../images/index-hover/1990-1994-total-photography/evgeniy-pavlov-total-photography-13-1990-1994.jpg'),
        require('../images/index-hover/1990-1994-total-photography/evgeniy-pavlov-total-photography-14-1990-1994.jpg'),
        require('../images/index-hover/1990-1994-total-photography/evgeniy-pavlov-total-photography-15-1990-1994.jpg'),
        require('../images/index-hover/1990-1994-total-photography/evgeniy-pavlov-total-photography-16-1990-1994.jpg'),
        require('../images/index-hover/1990-1994-total-photography/evgeniy-pavlov-total-photography-17-1990-1994.jpg'),
        require('../images/index-hover/1990-1994-total-photography/evgeniy-pavlov-total-photography-18-1990-1994.jpg'),
        require('../images/index-hover/1990-1994-total-photography/evgeniy-pavlov-total-photography-19-1990-1994.jpg'),
        require('../images/index-hover/1990-1994-total-photography/evgeniy-pavlov-total-photography-20-1990-1994.jpg'),
        require('../images/index-hover/1990-1994-total-photography/evgeniy-pavlov-total-photography-21-1990-1994.jpg'),
        require('../images/index-hover/1990-1994-total-photography/evgeniy-pavlov-total-photography-22-1990-1994.jpg'),
        require('../images/index-hover/1990-1994-total-photography/evgeniy-pavlov-total-photography-23-1990-1994.jpg'),
        require('../images/index-hover/1990-1994-total-photography/evgeniy-pavlov-total-photography-24-1990-1994.jpg'),
        require('../images/index-hover/1990-1994-total-photography/evgeniy-pavlov-total-photography-25-1990-1994.jpg'),
        require('../images/index-hover/1990-1994-total-photography/evgeniy-pavlov-total-photography-26-1990-1994.jpg'),
        require('../images/index-hover/1990-1994-total-photography/evgeniy-pavlov-total-photography-27-1990-1994.jpg'),
        require('../images/index-hover/1990-1994-total-photography/evgeniy-pavlov-total-photography-28-1990-1994.jpg'),
        require('../images/index-hover/1990-1994-total-photography/evgeniy-pavlov-total-photography-29-1990-1994.jpg'),
        require('../images/index-hover/1990-1994-total-photography/evgeniy-pavlov-total-photography-30-1990-1994.jpg'),
        require('../images/index-hover/1990-1994-total-photography/evgeniy-pavlov-total-photography-31-1990-1994.jpg'),
        require('../images/index-hover/1990-1994-total-photography/evgeniy-pavlov-total-photography-32-1990-1994.jpg'),
        require('../images/index-hover/1990-1994-total-photography/evgeniy-pavlov-total-photography-33-1990-1994.jpg'),
        require('../images/index-hover/1990-1994-total-photography/evgeniy-pavlov-total-photography-34-1990-1994.jpg'),
        require('../images/index-hover/1990-1994-total-photography/evgeniy-pavlov-total-photography-35-1990-1994.jpg'),
        require('../images/index-hover/1990-1994-total-photography/evgeniy-pavlov-total-photography-36-1990-1994.jpg'),
        require('../images/index-hover/1990-1994-total-photography/evgeniy-pavlov-total-photography-37-1990-1994.jpg'),
        require('../images/index-hover/1990-1994-total-photography/evgeniy-pavlov-total-photography-38-1990-1994.jpg'),
        require('../images/index-hover/1990-1994-total-photography/evgeniy-pavlov-total-photography-39-1990-1994.jpg'),
        require('../images/index-hover/1990-1994-total-photography/evgeniy-pavlov-total-photography-40-1990-1994.jpg'),
        require('../images/index-hover/1990-1994-total-photography/evgeniy-pavlov-total-photography-41-1990-1994.jpg'),
    ],
    the_life_of_factory_1990: [
        require('../images/index-hover/1990-the-life-of-factory/evgeniy-pavlov-the-life-of-the-factory-1990-01.jpg'),

        require('../images/index-hover/1990-the-life-of-factory/evgeniy-pavlov-the-life-of-the-factory-1990-01.jpg'),
        require('../images/index-hover/1990-the-life-of-factory/evgeniy-pavlov-the-life-of-the-factory-1990-02.jpg'),
        require('../images/index-hover/1990-the-life-of-factory/evgeniy-pavlov-the-life-of-the-factory-1990-03.jpg'),
        require('../images/index-hover/1990-the-life-of-factory/evgeniy-pavlov-the-life-of-the-factory-1990-04.jpg'),
        require('../images/index-hover/1990-the-life-of-factory/evgeniy-pavlov-the-life-of-the-factory-1990-05.jpg'),
        require('../images/index-hover/1990-the-life-of-factory/evgeniy-pavlov-the-life-of-the-factory-1990-06.jpg'),
        require('../images/index-hover/1990-the-life-of-factory/evgeniy-pavlov-the-life-of-the-factory-1990-07.jpg'),
    ],
    archive_series_1995: [
        require('../images/index-hover/1995-archive-series/evgeniy-pavlov-archive-series-1995-01.jpg'),

        require('../images/index-hover/1995-archive-series/evgeniy-pavlov-archive-series-1995-01.jpg'),
        require('../images/index-hover/1995-archive-series/evgeniy-pavlov-archive-series-1995-02.jpg'),
        require('../images/index-hover/1995-archive-series/evgeniy-pavlov-archive-series-1995-03.jpg'),
        require('../images/index-hover/1995-archive-series/evgeniy-pavlov-archive-series-1995-04.jpg'),
        require('../images/index-hover/1995-archive-series/evgeniy-pavlov-archive-series-1995-05.jpg'),
        require('../images/index-hover/1995-archive-series/evgeniy-pavlov-archive-series-1995-06.jpg'),
        require('../images/index-hover/1995-archive-series/evgeniy-pavlov-archive-series-1995-07.jpg'),
        require('../images/index-hover/1995-archive-series/evgeniy-pavlov-archive-series-1995-08.jpg'),
        require('../images/index-hover/1995-archive-series/evgeniy-pavlov-archive-series-1995-09.jpg'),
        require('../images/index-hover/1995-archive-series/evgeniy-pavlov-archive-series-1995-10.jpg'),
        require('../images/index-hover/1995-archive-series/evgeniy-pavlov-archive-series-1995-11.jpg'),
        require('../images/index-hover/1995-archive-series/evgeniy-pavlov-archive-series-1995-12.jpg'),
        require('../images/index-hover/1995-archive-series/evgeniy-pavlov-archive-series-1995-13.jpg'),
        require('../images/index-hover/1995-archive-series/evgeniy-pavlov-archive-series-1995-14.jpg'),
        require('../images/index-hover/1995-archive-series/evgeniy-pavlov-archive-series-1995-15.jpg'),
        require('../images/index-hover/1995-archive-series/evgeniy-pavlov-archive-series-1995-16.jpg'),
        require('../images/index-hover/1995-archive-series/evgeniy-pavlov-archive-series-1995-17.jpg'),
        require('../images/index-hover/1995-archive-series/evgeniy-pavlov-archive-series-1995-18.jpg'),
        require('../images/index-hover/1995-archive-series/evgeniy-pavlov-archive-series-1995-19.jpg'),
    ],
    paried_still_lifes_1998: [
        require('../images/index-hover/1998-paired-still-lifes/evgeniy-pavlov-paired-still-lifes-1998-01.jpg'),

        require('../images/index-hover/1998-paired-still-lifes/evgeniy-pavlov-paired-still-lifes-1998-01.jpg'),
        require('../images/index-hover/1998-paired-still-lifes/evgeniy-pavlov-paired-still-lifes-1998-02.jpg'),
        require('../images/index-hover/1998-paired-still-lifes/evgeniy-pavlov-paired-still-lifes-1998-03.jpg'),
        require('../images/index-hover/1998-paired-still-lifes/evgeniy-pavlov-paired-still-lifes-1998-04.jpg'),
        require('../images/index-hover/1998-paired-still-lifes/evgeniy-pavlov-paired-still-lifes-1998-05.JPG'),
        require('../images/index-hover/1998-paired-still-lifes/evgeniy-pavlov-paired-still-lifes-1998-06.JPG'),
        require('../images/index-hover/1998-paired-still-lifes/evgeniy-pavlov-paired-still-lifes-1998-07.jpg'),
        require('../images/index-hover/1998-paired-still-lifes/evgeniy-pavlov-paired-still-lifes-1998-08.jpg'),
        require('../images/index-hover/1998-paired-still-lifes/evgeniy-pavlov-paired-still-lifes-1998-09.jpg'),
        require('../images/index-hover/1998-paired-still-lifes/evgeniy-pavlov-paired-still-lifes-1998-10.jpg'),
        require('../images/index-hover/1998-paired-still-lifes/evgeniy-pavlov-paired-still-lifes-1998-11.jpg'),
        require('../images/index-hover/1998-paired-still-lifes/evgeniy-pavlov-paired-still-lifes-1998-12.jpg'),
        require('../images/index-hover/1998-paired-still-lifes/evgeniy-pavlov-paired-still-lifes-1998-13.jpg'),
        require('../images/index-hover/1998-paired-still-lifes/evgeniy-pavlov-paired-still-lifes-1998-14.jpg'),
    ],
    common_field_1996: [
        require('../images/index-hover/1996-common-field/evgeniy-pavlov-vladimir-shaposhnikov-common-field-01-1996.jpg'),

        require('../images/index-hover/1996-common-field/evgeniy-pavlov-vladimir-shaposhnikov-common-field-01-1996.jpg'),
        require('../images/index-hover/1996-common-field/evgeniy-pavlov-vladimir-shaposhnikov-common-field-02-1996.jpg'),
        require('../images/index-hover/1996-common-field/evgeniy-pavlov-vladimir-shaposhnikov-common-field-03-1996.jpg'),
        require('../images/index-hover/1996-common-field/evgeniy-pavlov-vladimir-shaposhnikov-common-field-04-1996.jpg'),
        require('../images/index-hover/1996-common-field/evgeniy-pavlov-vladimir-shaposhnikov-common-field-05-1996.jpg'),
        require('../images/index-hover/1996-common-field/evgeniy-pavlov-vladimir-shaposhnikov-common-field-06-1996.jpg'),
        require('../images/index-hover/1996-common-field/evgeniy-pavlov-vladimir-shaposhnikov-common-field-07-1996.jpg'),
        require('../images/index-hover/1996-common-field/evgeniy-pavlov-vladimir-shaposhnikov-common-field-08-1996.jpg'),
        require('../images/index-hover/1996-common-field/evgeniy-pavlov-vladimir-shaposhnikov-common-field-09-1996.jpg'),
        require('../images/index-hover/1996-common-field/evgeniy-pavlov-vladimir-shaposhnikov-common-field-10-1996.jpg'),
        require('../images/index-hover/1996-common-field/evgeniy-pavlov-vladimir-shaposhnikov-common-field-11-1996.jpg'),
        require('../images/index-hover/1996-common-field/evgeniy-pavlov-vladimir-shaposhnikov-common-field-12-1996.jpg'),
        require('../images/index-hover/1996-common-field/evgeniy-pavlov-vladimir-shaposhnikov-common-field-13-1996.jpg'),
        require('../images/index-hover/1996-common-field/evgeniy-pavlov-vladimir-shaposhnikov-common-field-14-1996.jpg'),
        require('../images/index-hover/1996-common-field/evgeniy-pavlov-vladimir-shaposhnikov-common-field-15-1996.jpg'),
        require('../images/index-hover/1996-common-field/evgeniy-pavlov-vladimir-shaposhnikov-common-field-16-1996.jpg'),
        require('../images/index-hover/1996-common-field/evgeniy-pavlov-vladimir-shaposhnikov-common-field-17-1996.jpg'),
        require('../images/index-hover/1996-common-field/evgeniy-pavlov-vladimir-shaposhnikov-common-field-18-1996.jpg'),
        require('../images/index-hover/1996-common-field/evgeniy-pavlov-vladimir-shaposhnikov-common-field-19-1996.jpg'),
        require('../images/index-hover/1996-common-field/evgeniy-pavlov-vladimir-shaposhnikov-common-field-20-1996.jpg'),
        require('../images/index-hover/1996-common-field/evgeniy-pavlov-vladimir-shaposhnikov-common-field-21-1996.jpg'),
        require('../images/index-hover/1996-common-field/evgeniy-pavlov-vladimir-shaposhnikov-common-field-22-1996.jpg'),
        require('../images/index-hover/1996-common-field/evgeniy-pavlov-vladimir-shaposhnikov-common-field-23-1996.jpg'),
        require('../images/index-hover/1996-common-field/evgeniy-pavlov-vladimir-shaposhnikov-common-field-24-1996.jpg'),
        require('../images/index-hover/1996-common-field/evgeniy-pavlov-vladimir-shaposhnikov-common-field-25-1996.jpg')
    ],
    parnography_1998: [
        require('../images/index-hover/1998-parnography/evgeniy-pavlov-parnography-01-1998.jpg'),

        require('../images/index-hover/1998-parnography/evgeniy-pavlov-parnography-01-1998.jpg'),
        require('../images/index-hover/1998-parnography/evgeniy-pavlov-parnography-02-1998.jpg'),
        require('../images/index-hover/1998-parnography/evgeniy-pavlov-parnography-03-1998.jpg'),
        require('../images/index-hover/1998-parnography/evgeniy-pavlov-parnography-04-1998.jpg'),
        require('../images/index-hover/1998-parnography/evgeniy-pavlov-parnography-05-1998.jpg'),
        require('../images/index-hover/1998-parnography/evgeniy-pavlov-parnography-06-1998.jpg'),
        require('../images/index-hover/1998-parnography/evgeniy-pavlov-parnography-07-1998.jpg'),
        require('../images/index-hover/1998-parnography/evgeniy-pavlov-parnography-08-1998.jpg'),
        require('../images/index-hover/1998-parnography/evgeniy-pavlov-parnography-09-1998.jpg'),
        require('../images/index-hover/1998-parnography/evgeniy-pavlov-parnography-10-1998.jpg'),
    ],
    home_life_book_2002: [
        require('../images/index-hover/2002-home-life-book/evgeniy-pavlov-home-life-book-2002-01.jpg'),

        require('../images/index-hover/2002-home-life-book/evgeniy-pavlov-home-life-book-2002-01.jpg'),
        require('../images/index-hover/2002-home-life-book/evgeniy-pavlov-home-life-book-2002-02.jpg'),
        require('../images/index-hover/2002-home-life-book/evgeniy-pavlov-home-life-book-2002-03.jpg'),
        require('../images/index-hover/2002-home-life-book/evgeniy-pavlov-home-life-book-2002-04.jpg'),
        require('../images/index-hover/2002-home-life-book/evgeniy-pavlov-home-life-book-2002-05.jpg'),
        require('../images/index-hover/2002-home-life-book/evgeniy-pavlov-home-life-book-2002-06.jpg'),
        require('../images/index-hover/2002-home-life-book/evgeniy-pavlov-home-life-book-2002-07.jpg'),
        require('../images/index-hover/2002-home-life-book/evgeniy-pavlov-home-life-book-2002-08.jpg'),
        require('../images/index-hover/2002-home-life-book/evgeniy-pavlov-home-life-book-2002-09.jpg'),
        require('../images/index-hover/2002-home-life-book/evgeniy-pavlov-home-life-book-2002-10.jpg'),
        require('../images/index-hover/2002-home-life-book/evgeniy-pavlov-home-life-book-2002-11.jpg'),
        require('../images/index-hover/2002-home-life-book/evgeniy-pavlov-home-life-book-2002-12.jpg'),
        require('../images/index-hover/2002-home-life-book/evgeniy-pavlov-home-life-book-2002-13.jpg'),
        require('../images/index-hover/2002-home-life-book/evgeniy-pavlov-home-life-book-2002-14.jpg'),
        require('../images/index-hover/2002-home-life-book/evgeniy-pavlov-home-life-book-2002-15.jpg'),
        require('../images/index-hover/2002-home-life-book/evgeniy-pavlov-home-life-book-2002-16.jpg'),
        require('../images/index-hover/2002-home-life-book/evgeniy-pavlov-home-life-book-2002-17.jpg'),
        require('../images/index-hover/2002-home-life-book/evgeniy-pavlov-home-life-book-2002-18.jpg'),
        require('../images/index-hover/2002-home-life-book/evgeniy-pavlov-home-life-book-2002-19.jpg'),
        require('../images/index-hover/2002-home-life-book/evgeniy-pavlov-home-life-book-2002-20.jpg'),
        require('../images/index-hover/2002-home-life-book/evgeniy-pavlov-home-life-book-2002-21.jpg'),
    ],
    second_heaven_2003: [
        require('../images/index-hover/2003-second-heaven/evgeniy-pavlov-vladimir-shaposhnikov-the-second-heaven-01.jpg'),

        require('../images/index-hover/2003-second-heaven/evgeniy-pavlov-vladimir-shaposhnikov-the-second-heaven-01.jpg'),
        require('../images/index-hover/2003-second-heaven/evgeniy-pavlov-vladimir-shaposhnikov-the-second-heaven-02.jpg'),
        require('../images/index-hover/2003-second-heaven/evgeniy-pavlov-vladimir-shaposhnikov-the-second-heaven-03.jpg'),
        require('../images/index-hover/2003-second-heaven/evgeniy-pavlov-vladimir-shaposhnikov-the-second-heaven-04.jpg'),
    ]
};
const TextObj = {
    violin_1972: [
        'Barbecue party '
    ],
    orvochrome_1974_1985: [
        'tips can help '
    ],
    additions_1974_1989: [
        'a host put together'
    ],
    love_1976: [
        'Barbecue party tips can help a host put together an extraordinary event for family and friends. Eating outdoors is a favorite pastime enjoyed by everyone and planning the event can help make it more memorable and stress-free for the host. Big or small, a barbecue party requires an adequate amount of planning and preparation to ensure that everything is laid out properly.'
    ],
    documental_photography_1977: [
        'Barbecue party tips can help a host put together an extraordinary event for family and friends. Eating outdoors is a favorite pastime enjoyed by everyone and planning the event can help make it more memorable and stress-free for the host. Big or small, a barbecue party requires an adequate amount of planning and preparation to ensure that everything is laid out properly.'
    ],
    alcohol_psychosis_1983: [
        'Barbecue party tips can help a host put together an extraordinary event for family and friends. Eating outdoors is a favorite pastime enjoyed by everyone and planning the event can help make it more memorable and stress-free for the host. Big or small, a barbecue party requires an adequate amount of planning and preparation to ensure that everything is laid out properly.'
    ],
    montages_1984: [
        'Barbecue party tips can help a host put together an extraordinary event for family and friends. Eating outdoors is a favorite pastime enjoyed by everyone and planning the event can help make it more memorable and stress-free for the host. Big or small, a barbecue party requires an adequate amount of planning and preparation to ensure that everything is laid out properly.'
    ],
    IxSeven_1987: [
        'Barbecue party tips can help a host put together an extraordinary event for family and friends. Eating outdoors is a favorite pastime enjoyed by everyone and planning the event can help make it more memorable and stress-free for the host. Big or small, a barbecue party requires an adequate amount of planning and preparation to ensure that everything is laid out properly.'
    ],
    blatari_vospoda_1989: [
        'Barbecue party tips can help a host put together an extraordinary event for family and friends. Eating outdoors is a favorite pastime enjoyed by everyone and planning the event can help make it more memorable and stress-free for the host. Big or small, a barbecue party requires an adequate amount of planning and preparation to ensure that everything is laid out properly.'
    ],
    eclipse_1989: [
        'Barbecue party tips can help a host put together an extraordinary event for family and friends. Eating outdoors is a favorite pastime enjoyed by everyone and planning the event can help make it more memorable and stress-free for the host. Big or small, a barbecue party requires an adequate amount of planning and preparation to ensure that everything is laid out properly.'
    ],
    energetic_portraits_1989: [
        'Barbecue party tips can help a host put together an extraordinary event for family and friends. Eating outdoors is a favorite pastime enjoyed by everyone and planning the event can help make it more memorable and stress-free for the host. Big or small, a barbecue party requires an adequate amount of planning and preparation to ensure that everything is laid out properly.'
    ],
    total_photography_1990_1994: [
        'Barbecue party tips can help a host put together an extraordinary event for family and friends. Eating outdoors is a favorite pastime enjoyed by everyone and planning the event can help make it more memorable and stress-free for the host. Big or small, a barbecue party requires an adequate amount of planning and preparation to ensure that everything is laid out properly.'
    ],
    the_life_of_factory_1990: [
        'Barbecue party tips can help a host put together an extraordinary event for family and friends. Eating outdoors is a favorite pastime enjoyed by everyone and planning the event can help make it more memorable and stress-free for the host. Big or small, a barbecue party requires an adequate amount of planning and preparation to ensure that everything is laid out properly.'
    ],
    archive_series_1995: [
        'Barbecue party tips can help a host put together an extraordinary event for family and friends. Eating outdoors is a favorite pastime enjoyed by everyone and planning the event can help make it more memorable and stress-free for the host. Big or small, a barbecue party requires an adequate amount of planning and preparation to ensure that everything is laid out properly.'
    ],
    common_field_1996: [
        'Barbecue party tips can help a host put together an extraordinary event for family and friends. Eating outdoors is a favorite pastime enjoyed by everyone and planning the event can help make it more memorable and stress-free for the host. Big or small, a barbecue party requires an adequate amount of planning and preparation to ensure that everything is laid out properly.'
    ],
    paried_still_lifes_1998: [
        'Barbecue party tips can help a host put together an extraordinary event for family and friends. Eating outdoors is a favorite pastime enjoyed by everyone and planning the event can help make it more memorable and stress-free for the host. Big or small, a barbecue party requires an adequate amount of planning and preparation to ensure that everything is laid out properly.'
    ],
    parnography_1998: [
        'Barbecue party tips can help a host put together an extraordinary event for family and friends. Eating outdoors is a favorite pastime enjoyed by everyone and planning the event can help make it more memorable and stress-free for the host. Big or small, a barbecue party requires an adequate amount of planning and preparation to ensure that everything is laid out properly.'
    ],
    home_life_book_2002: [
        'Barbecue party tips can help a host put together an extraordinary event for family and friends. Eating outdoors is a favorite pastime enjoyed by everyone and planning the event can help make it more memorable and stress-free for the host. Big or small, a barbecue party requires an adequate amount of planning and preparation to ensure that everything is laid out properly.'
    ],
    second_heaven_2003: [
        'Barbecue party tips can help a host put together an extraordinary event for family and friends. Eating outdoors is a favorite pastime enjoyed by everyone and planning the event can help make it more memorable and stress-free for the host. Big or small, a barbecue party requires an adequate amount of planning and preparation to ensure that everything is laid out properly.'
    ]
};

class SliderComponent extends React.Component {
    componentDidMount() {
        setTimeout(() => {
            this.refs.slider.slickGoTo(parseInt(this.props.match.params.slideNum));
        }, 0);
    };

    render() {

        let projectInfo = TextObj[this.props.match.params.sliderId].map((text, i) => {
            return (
                <p className="slider-slide__text" key={i}>{text}</p>
            );
        });

        let photos = ImgObj[this.props.match.params.sliderId].map((url, i) => {
            if (i == 0) {
                return (
                    <div className="slider-slide" key={i}>
                        {projectInfo}
                    </div>
                );
            }
            else {
                return (
                    <div className="slider-slide" key={i}>
                        <img className="slider-slide__img" src={url} alt="" />
                    </div>
                );
            }
        });

        const settings = {
            className: 'slick-slider-fade',
            cssEase: 'none',
            lazyLoad: true,

            // loop slider logic
            // beforeChange: (oldIndex, newIndex) => {
            //     let self = this;
            //     let galleryKeys = Object.keys(ImgObj);

            //     if (oldIndex === ImgObj[self.props.match.params.sliderId].length - 1) {
            //         if (galleryKeys.indexOf(self.props.match.params.sliderId) !== galleryKeys.length) {
            //             let nextSlider = galleryKeys.indexOf(self.props.match.params.sliderId) + 1;
            //             let sliderId = galleryKeys[nextSlider];
            //             self.props.history.push("/slider/" + sliderId + '/0');
            //         }
            //     }
            //     if ((oldIndex === 0) && (newIndex === ImgObj[self.props.match.params.sliderId].length - 1)) {
            //         if (galleryKeys.indexOf(self.props.match.params.sliderId) !== 0) {
            //             let prevSlider = galleryKeys.indexOf(self.props.match.params.sliderId) - 1;
            //             let sliderId = galleryKeys[prevSlider];
            //             self.props.history.push("/slider/" + sliderId + '/0');
            //         }
            //     }
            // },
        };

        return (
            <Slider {...settings} ref="slider">
                {photos}
            </Slider>
        );
    }
};

export default SliderComponent