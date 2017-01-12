# -*- coding: utf-8 -*-

# Define your item pipelines here
#
# Don't forget to add your pipeline to the ITEM_PIPELINES setting
# See: http://doc.scrapy.org/en/latest/topics/item-pipeline.html

from scrapy.xlib.pydispatch import dispatcher
from scrapy import signals
from scrapy.contrib.exporter import JsonItemExporter
from scrapy.exceptions import DropItem
import json


class CrawlerPipeline(object):
    '''Pipeline to alter scraped items.'''

    def __init__(self):
        dispatcher.connect(self.spider_opened, signals.spider_opened)
        dispatcher.connect(self.spider_closed, signals.spider_closed)
        self.files = {}

    def spider_opened(self, spider):
        '''Open Spider.'''
        file = open('../data/complete.json', 'w+b')
        self.files[spider] = file
        self.exporter = JsonItemExporter(file)
        self.exporter.start_exporting()

    def spider_closed(self, spider):
        '''Close Spider.'''
        self.exporter.finish_exporting()
        file = self.files.pop(spider)
        file.close()

    def process_item(self, item, spider):
        '''Process Items.'''

        # Process Field 'number'
        # Drop empty item
        if item['number']:
            item['number'] = item['number']
        else:
            raise DropItem(item['number'])

        # Process Field 'pubday'
        # Changing day format
        if item['pubday']:
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
                item['pubtime'] = 'WRONG DAY FORMAT'

        # Process Field 'pubtime'
        if item['pubtime']:
            item['pubtime_original'] = item['pubtime']  # Save original value
            item['pubtime'] = item['pubtime'][0][:-3]  # Removing Seconds

        # Process Field 'duration'
        if item['duration']:
            item['duration_original'] = item['duration']  # Save original value
            item['duration'] = item['duration'][0][:-3]  # Removing Seconds

        self.exporter.export_item(item)
        return item

# class CrawlerPipeline(object):
#     '''Pipeline to alter scraped items.'''
#
#     def open_spider(self, spider):
#         '''Open Spider.'''
#         self.file = open('../data/scrape.json', 'w+b')
#
#     def close_spider(self, spider):
#         '''Close Spider.'''
#         self.file.close()
#
#     def process_item(self, item, spider):
#         '''Process Items.'''
#
#         '''
#         if item['description']:
#         # Enter here how to clean the description part!
#         '''
#
#         line = json.dumps(dict(item)) + "\n"
#         self.file.write(line)
#         return item
#
#         # if item['specials']:
#         #     if any('Nobelpreis' in s for s in item['specials']):
#         #         item['titlesub'] = 'China'
#         #     else:
#         #         raise DropItem(item['specials'])
