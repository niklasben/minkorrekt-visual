# -*- coding: utf-8 -*-

# Define your item pipelines here
#
# Don't forget to add your pipeline to the ITEM_PIPELINES setting
# See: http://doc.scrapy.org/en/latest/topics/item-pipeline.html

from scrapy.xlib.pydispatch import dispatcher
from scrapy import signals
from scrapy.contrib.exporter import JsonItemExporter
from scrapy.exceptions import DropItem

import datetime


class CrawlerPipeline(object):
    """Pipeline to alter scraped items."""

    def __init__(self):
        """Initialise Pipeline."""
        dispatcher.connect(self.spider_opened, signals.spider_opened)
        dispatcher.connect(self.spider_closed, signals.spider_closed)
        self.files = {}

    def spider_opened(self, spider):
        """Open Spider."""
        file = open('../website/data/complete.json', 'w+b')
        self.files[spider] = file
        self.exporter = JsonItemExporter(file)
        self.exporter.start_exporting()

    def spider_closed(self, spider):
        """Close Spider."""
        self.exporter.finish_exporting()
        file = self.files.pop(spider)
        file.close()

    def process_item(self, item, spider):
        """Process Items."""
        # Process Field 'number'
        if item['number']:
            # Add leading 0 to 12a and 12b
            if item['number'][0] in ('12a', '12b'):
                item['number'] = '0' + item['number'][0]
            # if item['number'][0] == '12a':
            #     item['number'] = '012.1'
            # elif item['number'][0] == '12b':
            #     item['number'] = '012.2'
            else:
                # Add leading 0 up to total length of 3
                item['number'] = item['number'][0].zfill(3)
        else:
            # Drop empty item
            raise DropItem(item['number'])

        # Process Field 'pubdate'
        if item['pubdate']:
            alterToCET = datetime.datetime.strptime(
                item['pubdate'][0], '%a, %d %b %Y %H:%M:%S')
            alterToCET = alterToCET + datetime.timedelta(hours=1)
            # alterToCET = alterToCET.strftime('%a, %d %b %Y %H:%M:%S')
            alterToCET = alterToCET.strftime('%Y-%m-%d %H:%M:%S.000000')
            item['pubdate'] = alterToCET

        # Process Field 'pubday'
        if item['pubday']:
            # Changing day format
            if any('Mon' in s for s in item['pubday']):
                item['pubday'] = 'Montag'
            elif any('Tue' in s for s in item['pubday']):
                item['pubday'] = 'Dienstag'
            elif any('Wed' in s for s in item['pubday']):
                item['pubday'] = 'Mittwoch'
            elif any('Thu' in s for s in item['pubday']):
                item['pubday'] = 'Donnerstag'
            elif any('Fri' in s for s in item['pubday']):
                item['pubday'] = 'Freitag'
            elif any('Sat' in s for s in item['pubday']):
                item['pubday'] = 'Samstag'
            elif any('Sun' in s for s in item['pubday']):
                item['pubday'] = 'Sonntag'
            else:
                item['pubday'] = 'WRONG DAY FORMAT'

        # Process Field 'pubtime'
        if item['pubtime']:
            # Change from GMT to CET
            alterTimeToCET = datetime.datetime.strptime(
                item['pubtime'][0], '%H:%M:%S')
            alterTimeToCET = alterTimeToCET + datetime.timedelta(hours=1)
            alterTimeToCET = alterTimeToCET.strftime('%H:%M:%S')
            item['pubtime'] = alterTimeToCET
            # Save pubtime as integer
            tpub = item['pubtime'][0]
            item['pubtime_integer'] = sum(
                int(x) * 60 ** i for i, x in enumerate(reversed(
                    tpub.split(":"))))

        # Alter empty durations with real value
        if item['number'] == '000':
            item['duration'][0] = '01:46:01'
        elif item['number'] == '001':
            item['duration'][0] = '01:39:34'
        elif item['number'] == '002':
            item['duration'][0] = '01:55:14'
        elif item['number'] == '003':
            item['duration'][0] = '02:02:28'
        elif item['number'] == '004':
            item['duration'][0] = '02:17:18'
        elif item['number'] == '005':
            item['duration'][0] = '02:08:03'
        elif item['number'] == '006':
            item['duration'][0] = '02:29:09'
        elif item['number'] == '007':
            item['duration'][0] = '02:42:58'
        elif item['number'] == '008':
            item['duration'][0] = '02:21:36'
        elif item['number'] == '009':
            item['duration'][0] = '02:07:42'
        elif item['number'] == '010':
            item['duration'][0] = '02:13:07'
        elif item['number'] == '011':
            item['duration'][0] = '02:19:37'
        elif item['number'] == '012a':
            item['duration'][0] = '00:59:06'
        elif item['number'] == '012b':
            item['duration'][0] = '00:41:33'
        elif item['number'] == '013':
            item['duration'][0] = '02:43:32'
        elif item['number'] == '014':
            item['duration'][0] = '01:59:41'
        elif item['number'] == '015':
            item['duration'][0] = '02:30:15'
        elif item['number'] == '016':
            item['duration'][0] = '02:46:53'
        elif item['number'] == '017':
            item['duration'][0] = '02:29:01'
        elif item['number'] == '018':
            item['duration'][0] = '02:44:20'
        elif item['number'] == '019':
            item['duration'][0] = '02:18:56'
        elif item['number'] == '020':
            item['duration'][0] = '02:27:10'
        elif item['number'] == '021':
            item['duration'][0] = '02:51:22'
        elif item['number'] == '022':
            item['duration'][0] = '02:18:16'
        elif item['number'] == '023':
            item['duration'][0] = '02:49:37'
        elif item['number'] == '024':
            item['duration'][0] = '02:37:09'
        elif item['number'] == '025':
            item['duration'][0] = '02:34:52'
        elif item['number'] == '026':
            item['duration'][0] = '02:44:25'
        elif item['number'] == '027':
            item['duration'][0] = '02:37:43'
        elif item['number'] == '028':
            item['duration'][0] = '02:56:38'
        elif item['number'] == '029':
            item['duration'][0] = '03:14:28'
        elif item['number'] == '030':
            item['duration'][0] = '02:19:35'
        elif item['number'] == '031':
            item['duration'][0] = '02:55:49'
        elif item['number'] == '032':
            item['duration'][0] = '03:12:45'
        elif item['number'] == '033':
            item['duration'][0] = '02:17:02'
        elif item['number'] == '034':
            item['duration'][0] = '02:52:31'
        elif item['number'] == '035':
            item['duration'][0] = '02:36:32'
        elif item['number'] == '036':
            item['duration'][0] = '03:40:17'
        elif item['number'] == '037':
            item['duration'][0] = '03:07:41'
        elif item['number'] == '038':
            item['duration'][0] = '02:50:01'
        elif item['number'] == '039':
            item['duration'][0] = '03:01:35'
        elif item['number'] == '040':
            item['duration'][0] = '03:39:16'
        elif item['number'] == '041':
            item['duration'][0] = '01:48:45'
        elif item['number'] == '042':
            item['duration'][0] = '03:37:21'
        elif item['number'] == '043':
            item['duration'][0] = '02:46:26'
        elif item['number'] == '044':
            item['duration'][0] = '02:46:05'
        elif item['number'] == '045':
            item['duration'][0] = '03:08:51'
        elif item['number'] == '046':
            item['duration'][0] = '02:59:17'
        elif item['number'] == '047':
            item['duration'][0] = '02:46:31'
        elif item['number'] == '048':
            item['duration'][0] = '03:14:36'
        elif item['number'] == '049':
            item['duration'][0] = '03:21:24'
        elif item['number'] == '077':
            item['duration'][0] = '03:13:03'

        # Process Field 'duration'
        if item['duration']:
            # Save pubtime as integer
            tdur = item['duration'][0]
            item['duration_integer'] = sum(
                int(x) * 60 ** i for i, x in enumerate(reversed(
                    tdur.split(':'))))
            # Specify duration as time format
            alterDuration = datetime.datetime.strptime(
                item['duration'][0], '%H:%M:%S')
            alterDuration = alterDuration.strftime('%H:%M:%S')
            item['duration'] = alterDuration

        # Return all crawled items
        self.exporter.export_item(item)
        return item
