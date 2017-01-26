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

        # Process Field 'duration'
        if item['duration']:
            # Save pubtime as integer
            tdur = item['duration'][0]
            item['duration_integer'] = sum(
                int(x) * 60 ** i for i, x in enumerate(reversed(
                    tdur.split(":"))))
            # Specify duration as time format
            alterDuration = datetime.datetime.strptime(
                item['duration'][0], '%H:%M:%S')
            alterDuration = alterDuration.strftime('%H:%M:%S')
            item['duration'] = alterDuration

        # Return all crawled items
        self.exporter.export_item(item)
        return item
