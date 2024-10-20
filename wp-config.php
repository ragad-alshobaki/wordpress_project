<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the website, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://developer.wordpress.org/advanced-administration/wordpress/wp-config/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'wordpress_db' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '2G+SP,n35zhIp Idmk!g%H4_bNkh(z7.j9ID?T LQ9F)O9G?|EaIbUJ=?O8;@C9b' );
define( 'SECURE_AUTH_KEY',  'E2]M9Xyfg~ CoQh)_^uBi.O7wf,_A32&Np8Dd>:&`1fH:}U4.ehZ Zid=NbI3SgY' );
define( 'LOGGED_IN_KEY',    '?obC/A)=5$Ra-S,j._*ggGU;zoT&q`ZYO#SK;FE1f2?qFCvIA8SnPv{7uG^2^u$1' );
define( 'NONCE_KEY',        '] 5.T22JryKGQOf>F7,}4dI~$&0zf(vzedNgnZ5I%zoFE[v-8(3dDDS;Gr?=+XiT' );
define( 'AUTH_SALT',        'jH>[./mskxKH.!dN,8jm !AHI[D_#-oepP0MFebkcMW4WCDo~xbOVp>a,(jQ^,X ' );
define( 'SECURE_AUTH_SALT', 'STo-Ls6AczflqEQPd*J2CSH73:vSTU7Cnu|!!nk *^Q:KA1]qB72U87BN{b7K;V)' );
define( 'LOGGED_IN_SALT',   'P*cAOz<DSV~lWL8LKpYp2iX+<opHa$O>5H%vh3-^KBmbJyL#Gdt.VHa=.}40#?dD' );
define( 'NONCE_SALT',       '0[3p?l=}f&p/2dqkQ.Op-<[9#JT=6iUHg~ENKi@z*R EU?OZ5Tk0!W8RV|,7ly/1' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://developer.wordpress.org/advanced-administration/debug/debug-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
