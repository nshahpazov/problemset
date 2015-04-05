#!/usr/bin/env perl
use strict;
use warnings;
use utf8;
use 5.012;

BEGIN { $/ = " ";}



sub replaced {
        my $str = shift @_;
        my @chars = split "", $str;
        my $len = length $str;
        $chars[0] . (length $str) . substr $str, -1;
};

my $n = <>;
while ($n--) {
        my $x = <>;
       print replaced "dsadsadsadsa";
        print "\n";
}
# my $n = <>;
